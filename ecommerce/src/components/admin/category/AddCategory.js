import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function AddCategory() {

    const navigate = useNavigate();

    const [categoryInput, setCategory] = useState({
        slug: '',
        name: '',
        description: '',
        status: '',
        meta_title: '',
        meta_keyword: '',
        meta_description: '',
        error_list: [],
        // meta_title: '',
        // meta_title: '',
    });

    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value})
    }

    const submitCategory = (e) =>{
        e.preventDefault();

        const data = {
            slug:categoryInput.slug,
            name:categoryInput.name,
            description:categoryInput.description,
            status:categoryInput.status,
            meta_title:categoryInput.meta_title,
            meta_keyword:categoryInput.meta_keyword,
            meta_description:categoryInput.meta_description,
           
        }

        axios.post(`/api/store-category`, data).then(res => {
            if(res.data.status === 200){
                swal("Success", res.data.message, 'success');
                document.getElementById('CATEGORY_FORM').reset();
                return navigate('/admin/view-category');
            }else if(res.data.status === 400){
                setCategory({...categoryInput, error_list:res.data.errors});
            }
        });
    }


  return (
    <div className='container-fluid px-4'>
        <div className="card mt-4">
            <div className="card-header">
                <h4>Add Category</h4>
                <Link to='/admin/view-category' className='btn btn-primary btn-sm float-end'>View Category</Link>
            </div>


        <form onSubmit={submitCategory} id='CATEGORY_FORM'>
            <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#seo-tab-pane" type="button" role="tab" aria-controls="seo-tab-pane" aria-selected="false">SEO Tags</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane p-3 fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <div className="form-group mb-3">
                        <label htmlFor="">Slug</label>
                        <input type="text" name='slug' onChange={handleInput} value={categoryInput.slug}  className='form-control'/>
                        <span>{categoryInput.error_list.slug}</span>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' onChange={handleInput} value={categoryInput.name} className='form-control'/>
                        <span>{categoryInput.error_list.name}</span>

                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Description</label>
                        <textarea name='description' onChange={handleInput} value={categoryInput.description} className='form-control'></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Status</label>
                        <input type="checkbox" name='status' onChange={handleInput} value={categoryInput.status}/> <span> [Status - 0=Shown, 1=Hide] </span>
                    </div>
                </div>
                <div className="tab-pane p-3 fade" id="seo-tab-pane" role="tabpanel" aria-labelledby="seo-tab" tabIndex="0">
                    
                    <div className="form-group mb-3">
                        <label htmlFor="">Meta Title</label>
                        <input type="text" name='meta_title' onChange={handleInput} value={categoryInput.meta_title} className='form-control'/>
                        <span>{categoryInput.error_list.meta_title}</span>

                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Meta Keywords</label>
                        <textarea name='meta_keyword' onChange={handleInput} value={categoryInput.meta_keyword} className='form-control'></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Meta Description</label>
                        <textarea name='meta_description' onChange={handleInput} value={categoryInput.meta_description} className='form-control'></textarea>
                    </div>
                </div>
            </div>
            <button type='submit' className='btn btn-primary px-4 float-end m-3'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default AddCategory;