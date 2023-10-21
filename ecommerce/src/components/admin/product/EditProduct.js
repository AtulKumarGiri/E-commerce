import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

function EditProduct(props) {
    // const { id } = useParams();
    const { id } = useParams();

    const [categorylist, setCategorylist] = useState([]);
    const [errorlist, setErrorlist] = useState([]);
    const [productInput, setProduct] = useState([]); 
    const [picture, setPicture] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allCheckbox, setCheckboxes] = useState([]);
    const navigate = useNavigate();

    const handleInput = (e) => {
        e.persist();

        setProduct({...productInput, [e.target.name]: e.target.value });
    }

    const handleCheckbox = (e) => {
        e.persist();
        setCheckboxes({...allCheckbox, [e.target.name]: e.target.checked});
    }

    const handleImage = (e) => {
        setPicture(e.target.files[0]);
    };



    useEffect(()=>{

      document.title = 'Edit Product';

        axios.get(`/api/all-category`).then(res=>{
            if(res.data.status === 200){
               setCategorylist(res.data.category);
            }
        });

        
        axios.get(`/api/edit-product/${id}`).then(res =>{
          if(res.data.status === 200){
            setProduct(res.data.product);
            setCheckboxes(res.data.product);
          }else if(res.data.status === 404){
            swal('error', res.data.message, 'error');
            return navigate('/admin/view-product');

          }
          setLoading(false);
        });


    }, [id]);


    const updateProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', picture);
        formData.append('category_id', productInput.category_id);
        formData.append('slug', productInput.slug);
        formData.append('name', productInput.name);
        formData.append('description', productInput.description);
        formData.append('meta_title', productInput.meta_title);
        formData.append('meta_keyword', productInput.meta_keyword);
        formData.append('meta_description', productInput.meta_description);
        formData.append('selling_price', productInput.selling_price);
        formData.append('original_price', productInput.original_price);
        formData.append('quantity', productInput.quantity);
        formData.append('brand', productInput.brand);
        formData.append('featured', allCheckbox.featured ? '1':'0');
        formData.append('popular', allCheckbox.popular ? '1':'0');
        formData.append('status', allCheckbox.status ? '1':'0');

        axios.post(`/api/update-product/${id}`, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res=> {
          console.log("Response Data:", res.data); 
            if(res.data.status === 200){
                swal("Success", res.data.message, 'success');
                setErrorlist([]);

            }else if(res.data.status === 422){
                swal("All Fields are mandatory","","error");
                setErrorlist(res.data.errors);
            }else if(res.data.status===404){
              swal("Error", res.data.message, "error");
              return navigate('/admin/view-product');
            }
        });
    }

    if(loading){
      return <h4>Loading...</h4>
    }

  return (
    <div className='container-fluid px-4'>
        <div className="card mt-4">
            <div className="card-header">
                <h4>Edit Product 
                    <Link to='/admin/view-product' className="btn btn-primary btn-sm float-end">View Product</Link>
                </h4>
            </div>
            <div className="card-body">
                <form encType='multipart/form-data' onSubmit={updateProduct}>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="seo-tab" data-bs-toggle="tab" data-bs-target="#seo-tab-pane" type="button" role="tab" aria-controls="seo-tab-pane" aria-selected="false">SEO Tags</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="other-tab" data-bs-toggle="tab" data-bs-target="#other-tab-pane" type="button" role="tab" aria-controls="other-tab-pane" aria-selected="false">Other Details</button>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane card-body border fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                            <div className="form-group mb-3">
                                <label htmlFor="">Select Category</label>
                                <select name="category_id" onChange={handleInput} value={productInput.category_id} className='form-control' id="">
                                    <option value="">Select Category</option>
                                    {
                                        categorylist.map( (item) =>{
                                            return(
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <small className="text-danger">{errorlist.category_id}</small>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Slug</label>
                                <input type="text" name='slug'  onChange={handleInput} value={productInput.slug} className='form-control' />
                                <small className="text-danger">{errorlist.slug}</small>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" name='name'  onChange={handleInput} value={productInput.name} className='form-control' />
                                <small className="text-danger">{errorlist.name}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Description</label>
                                <textarea name='description'  onChange={handleInput} value={productInput.description} className='form-control' ></textarea>
                            </div>
                        </div>
                        <div className="tab-pane card-body border fade" id="seo-tab-pane" role="tabpanel" aria-labelledby="seo-tab" tabIndex="0">
                            <div className="form-group mb-3">
                                <label htmlFor="">Meta Titles</label>
                                <input type="text" name='meta_title'  onChange={handleInput} value={productInput.meta_title} className='form-control' />
                                <small className="text-danger">{errorlist.meta_title}</small>

                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="">Meta Keywords</label>
                                <textarea name='meta_keyword'  onChange={handleInput} value={productInput.meta_keyword} className='form-control'></textarea>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="">Meta Description</label>
                                <textarea name='meta_description'  onChange={handleInput} value={productInput.meta_description} className='form-control'></textarea>
                            </div>
                        </div>
                        <div className="tab-pane card-body border fade" id="other-tab-pane" role="tabpanel" aria-labelledby="other-tab" tabIndex="0">
                            <div className="row">
                                <div className="col-md-4 form-group mb-3">
                                    <label htmlFor="">Selling Price</label>
                                    <input type="text" name='selling_price'  onChange={handleInput} value={productInput.selling_price} className='form-control' />
                                    <small className="text-danger">{errorlist.selling_price}</small>

                                </div>
                                <div className="col-md-4 form-group mb-3">
                                    <label htmlFor="">Original Price</label>
                                    <input type="text" name='original_price'  onChange={handleInput} value={productInput.original_price} className='form-control' />
                                    <small className="text-danger">{errorlist.original_price}</small>

                                </div>
                                <div className="col-md-4 form-group mb-3">
                                    <label htmlFor="">Quantity</label>
                                    <input type="text" name='quantity'  onChange={handleInput} value={productInput.quantity} className='form-control' />
                                    <small className="text-danger">{errorlist.quantity}</small>

                                </div>
                                <div className="col-md-4 form-group mb-3">
                                    <label htmlFor="">Brand</label>
                                    <input type="text" name='brand'  onChange={handleInput} value={productInput.brand} className='form-control' />
                                    <small className="text-danger">{errorlist.brand}</small>

                                </div>
                                <div className="col-md-8 form-group mb-3">
                                    <label htmlFor="">Image</label>
                                    <input type="file" name='image' accept='image/*'  onChange={handleImage} className='form-control' />
                                    <img src={`http://localhost:8000/${productInput.image}`} width="50px" alt="" />
                                    <small className="text-danger">{errorlist.image}</small>

                                </div>
                                <div className="col-md-4 form-group mb-3">
                                    <label htmlFor="">Featured (Checked=Shown)</label>
                                    <input type="checkbox" name='featured' onChange={handleCheckbox} defaultChecked={allCheckbox.featured === 1 ? true:false} className='w-50 h-50' />
                                </div>
                                <div className="col-md-4 form-group mb-3">
                                    <label htmlFor="">Popular (Checked=Shown)</label>
                                    <input type="checkbox" name='popular'  onChange={handleCheckbox} defaultChecked={allCheckbox.popular === 1 ? true:false} className='w-50 h-50' />
                                </div>
                                <div className="col-md-4 form-group mb-3">
                                    <label htmlFor="">Status (Checked=Shown)</label>
                                    <input type="checkbox" name='status' onChange={handleCheckbox} defaultChecked={allCheckbox.status === 1 ? true:false} className='w-50 h-50' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary btn-sm float-end m-3">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditProduct