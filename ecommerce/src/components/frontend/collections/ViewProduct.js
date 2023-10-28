import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

function ViewProduct() {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const { slug } = useParams();

    const productCount = product.length;


    useEffect(()=>{
        let isMounted = true;

        axios.get(`/api/fetchProducts/${slug}`).then(res=>{
            if(isMounted){
                if(res.data.status === 200){
                    setProduct(res.data.product_data.product);
                    setCategory(res.data.product_data.category);
                    setLoading(false);
                }else if(res.data.status === 400){
                    swal('warning', res.data.message, '')
                }
                else if(res.data.status === 404){
                    swal('Warning', res.data.message, 'error');
                    return navigate('/');
                }
            }
        })

        return () => {
            isMounted = false;
        };

    }, [slug, navigate]);

    if(loading){
        return <h4>Loading Products....</h4>
    }else{
        var showProductList = '';
        if(productCount){

            showProductList = product.map( (item, idx) =>{
                return(
                    <div className="col-md-2" key={idx}>
                        <div className="card">
                            <Link to={`/collections/${item.category.slug}/${item.slug}`} className='text-center pt-4'>
                                <img src={`http://localhost:8000/${item.image}`} alt={item.name} width='120px' height='120px' />
                            </Link>
                            <div className="card-body">
                                <Link to={`/collections/${item.category.slug}/${item.slug}`}>
                                    <h6 className='text-center'>{item.name}</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            });
        }else{
            showProductList = 
            <div className=" card card-body py-5 text-center shadow-sm">
                <h4>No product Available for {category.name}</h4>
            </div>
        }
    }


  return (
    <div>
      {/* <div className="bg-warning">
         <div className="container">
          <h6>Collection/{category.name}</h6>
        </div> 
      </div> */}
      <div className="py-3">
        <div className="container">
          <div className="row">
            {showProductList}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct