import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


function Checkout() {

    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    var totalCartPrice = 0;

    const [checkoutInput, setCheckoutInput] = useState({
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        address:'',
        city:'',
        state:'',
        zipcode:'',

    });

    const [error, setError] = useState([]);

    useEffect(()=>{
        let isMounted = true;

        axios.get(`/api/cart`).then(res=>{
            if(isMounted){
                if(res.data.status === 200){
                    setCart(res.data.cart);
                    setLoading(false);
                }
                else if(res.data.status === 401){
                    swal('Warning', res.data.message, 'warning');
                    return navigate('/');
                }
            }
        })

        return () => {
            isMounted = false;
        };

    }, [navigate]);


    const handleInput = (e) => {
        e.persist();

        setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value });

    }

    const submitOrder = (e, payment_mode) => {
        e.preventDefault();

        const data = {
            firstname: checkoutInput.firstname,
            lastname: checkoutInput.lastname,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: checkoutInput.city,
            state: checkoutInput.state,
            zipcode: checkoutInput.zipcode,
            payment_mode: payment_mode,
        }

       

        switch (payment_mode) {
            case 'cod':
                axios.post(`/api/place-order`, data).then(res=>{
                    if(res.data.status === 200){
                        swal("Order Placed Successfully", res.data.message, 'success');
                        setError([]);
                        return navigate('/thank-you');
                    }else if(res.data.status === 422){
                        swal("All fields are mandatory", "", 'error');
                        setError(res.data.errors);
        
                    }
                });                
                break;
            
            case 'razorpay':
                axios.post(`/api/validate-order`, data).then(res=>{
                    if(res.data.status === 200){
                        setError([]);

                        var options = {
                            "key": "YOUR_KEY_ID",
                            "amount": (totalCartPrice * 100), 
                            "name": "Acommerce", 
                            "description": "Thank you for purchasing with us",
                            "image": "https://example.com/your_logo",
                            "handler": function (response){
                                alert(response.razorpay_payment_id);
                                
                            },
                            "prefill": { 
                                "name": data.firstname + data.lastname, 
                                "email": data.email,
                                "contact": data.phone   
                            },
                            "theme": {
                                "color": "#3399cc"
                            }
                        };
                        var rzp = new window.Razorpay(options);
                        rzp.open();

                    }else if(res.data.status === 422){
                        swal("All fields are mandatory", "", 'error');
                        setError(res.data.errors);
        
                    }
                });
                break;
        
            default:
                break;
        }
    }

    if(loading){
        return <h4>Loading Checkout...</h4>
    }

    var checkout_HTML = '';

    if(cart.length > 0){

        checkout_HTML = <div>
            <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header">
                                <h4>Basic Information</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>First Name</label>
                                            <input type="text" name="firstname" onChange={handleInput} value={checkoutInput.firstname} className="form-control" />
                                            <small className='text-danger'>{error.firstname}</small>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Last Name</label>
                                            <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control" />
                                            <small className='text-danger'>{error.lastname}</small>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Phone Number</label>
                                            <input type="text" name="phone" onChange={handleInput} value={checkoutInput.phone} className="form-control" />
                                            <small className='text-danger'>{error.phone}</small>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Email Address</label>
                                            <input type="email" name="email" onChange={handleInput} value={checkoutInput.email} className="form-control" />
                                            <small className='text-danger'>{error.email}</small>

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label>Full Address</label>
                                            <textarea name="address" rows="3" onChange={handleInput} value={checkoutInput.address} className="form-control"></textarea>
                                            <small className='text-danger'>{error.address}</small>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label>City</label>
                                            <input type="text" name="city" onChange={handleInput} value={checkoutInput.city} className="form-control" />
                                            <small className='text-danger'>{error.city}</small>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label>State</label>
                                            <input type="text" name="state" onChange={handleInput} value={checkoutInput.state} className="form-control" />
                                            <small className='text-danger'>{error.state}</small>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label>Zip Code</label>
                                            <input type="text" name="zipcode" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" />
                                            <small className='text-danger'>{error.zipcode}</small>

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group text-end">
                                            <button className="btn btn-primary m-2" onClick={(e) => submitOrder(e, 'cod')}>Place Order</button>
                                            <button className="btn btn-primary m-auto" onClick={(e) => submitOrder(e, 'razorpay')}>Pay Online</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th width='50%'>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map( (item, idx) =>{

                                    totalCartPrice += item.product.selling_price * item.product_qty;
                                    return(
                                        <tr key={idx}>
                                            <td>{item.product.name}</td>
                                            <td>{item.product.selling_price}</td>
                                            <td>{item.product_qty}</td>
                                            <td>{ item.product.selling_price * item.product_qty}</td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td colSpan="2" className='text-end fw-bold'>Grand Total</td>
                                    <td colSpan="2" className='text-end fw-bold'>{totalCartPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   
                </div>
        </div>

    }else{
        checkout_HTML = <div>
            <div className="card card-body py-5 text-center shadow-sm">
                <h4 className='text-center'>Your Shopping Cart is Empty</h4>
            </div>
        </div>
    }

  return (
    <div>
        <div className="py-3 bg-warning">
            <div className="container">
              <h6>Home / Checkout</h6>
            </div>
        </div>
        <div className="py-4">
            <div className="container">
                {checkout_HTML}
            </div>
        </div>
    </div>
  )
}

export default Checkout