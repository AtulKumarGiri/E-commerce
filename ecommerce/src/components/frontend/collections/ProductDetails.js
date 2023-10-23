import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';



function ProductDetails() {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const { product_slug, category_slug} = useParams();
    const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        let isMounted = true;

        axios.get(`/api/viewProductDetails/${category_slug}/${product_slug}`).then(res=>{
            if(isMounted){
                if(res.data.status ===200){
                    setProduct(res.data.product);
                    setLoading(false);
                }
                else if(res.data.status === 404){
                    swal('Warning', res.data.message, 'error');
                    return navigate('/collections');
                }
            }
        })

        return () => {
            isMounted = false;
        };

    }, [product_slug, category_slug, navigate]);


    const handleIncrement = () => {
        if(quantity < 10){
            setQuantity(prevCount => prevCount + 1);
        }
    }

    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(prevCount => prevCount - 1);
        }
    }

    const submitAddtocart = (e) => {
        e.preventDefault();

        const data = {
            product_id: product.id,
            product_qty: quantity,
        }
        axios.post(`/api/add-to-cart`, data).then(res=>{
            if(res.data.status === 201){
                swal("Success",res.data.message, 'success');
            }else if(res.data.status === 409){
                swal("Success",res.data.message, 'success');
            }else if(res.data.status === 401){
                swal("Error",res.data.message, 'error');
            }else if(res.data.status === 404){
                swal("Warning",res.data.message, 'warning');
            }
        });
    }

    if(loading){
        return <h4>Loading Product Details...</h4>
    }else{
        var avail_stock = '';

        if(product.quantity>0){

            avail_stock = <div>
            <label htmlFor="" className="btn btn-sm btn-success px-4 mt-2">In Stock</label>
            <div className="row">
                <div className="col-md-3 mt-3">
                    <div className="input-group">
                        <button className="input-group-text" onClick={handleDecrement}>-</button>
                        {/* <input type="text" className="form-control text-center" /> */}
                        <div className="form-control text-center">{quantity}</div>
                        <button className="input-group-text" onClick={handleIncrement}>+</button>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <button className="btn btn-primary w-100" type='button' onClick={submitAddtocart}>Add to Cart</button>
                </div>
            </div>
        </div>
        }else{
            avail_stock = <div>
            <label htmlFor="" className="btn btn-sm btn-danger px-4 mt-2">Out of Stock</label>
            </div>
        }
    }

    return (
        <div>
          {/* <div className=" bg-warning">
            {/* <div className="container">
              <h6>Collections / {product.category.name} / {product.name}</h6>
            </div> 
          </div> */}
          <div className="py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-4 border-end">
                    <img src={`http://localhost:8000/${product.image}`} alt={product.name} className="w-100" />
                </div>
                
                <div className="col-md-8">
                    <h4>
                        {product.name}
                        <span className="float-end badge btn-sm btn-danger badge-pill">{product.brand}</span>
                    </h4>
                    <p>{product.description}</p>
                    <h4 className="mb-1">
                        Rs: {product.selling_price}
                        <s className="ms-2">Rs: {product.original_price}</s>
                    </h4>
                    <div>
                        {avail_stock}
                    </div>
                    <button className="btn btn-danger mt-3" type="button">Add to Wishlist</button>
                </div>
    
              </div>
            </div>
          </div>
        </div>
      )
}

export default ProductDetails