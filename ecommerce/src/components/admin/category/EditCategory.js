import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

function EditCategory() {

    const[categoryInput, setCategory] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // const category_id = props.match.params.id;
        axios.get(`/api/edit-category/${id}`).then(res =>{
            if(res.data.status === 200){
                setCategory(res.data.category);
            }else if(res.data.status === 401){
                swal('Error', res.data.message, 'error').then(()=>{
                    return navigate('/admin/view-category');
                });
            }
            setLoading(false);
        });
    }, [id]);

    const handleInput = (e) => {
        e.persist();

        setCategory({...categoryInput, [e.target.name]: e.target.value });
    }

    const updateCategory = (e) => {
        e.preventDefault();

        const data = categoryInput;

        axios.put(`/api/update-category/${id}`, data).then(res => {
            if(res.data.status === 200){
                swal("Success", res.data.message, 'success');
                setError([]);

            }else if(res.data.status === 422){
                swal("All Fields are mandatory.",'', 'error').then(()=>{
                    return navigate('/admin/view-category');
                });
                setError(res.data.errors);

            }else if(res.data.status === 404){
                swal("Error", res.data.message, 'error').then(()=>{
                    return navigate('/admin/view-category');
                });
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
                    <h4>Edit Category</h4>
                    <Link to='/admin/view-category' className='btn btn-primary btn-sm float-end'>Back</Link>
                </div>
                <form onSubmit={updateCategory}>
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
                                <input type="text" name='slug' onChange={handleInput} value={categoryInput.slug} className='form-control' />
                                <small className='text-danger'>{error.slug}</small>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" name='name' onChange={handleInput} value={categoryInput.name} className='form-control' />
                                <small className='text-danger'>{error.name}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Description</label>
                                <textarea name='description' onChange={handleInput} value={categoryInput.description} className='form-control'></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Status</label>
                                <input type="checkbox" name='status' onChange={handleInput} value={categoryInput.status} /> <span> [Status - 0=Shown, 1=Hide] </span>
                            </div>
                        </div>
                        <div className="tab-pane p-3 fade" id="seo-tab-pane" role="tabpanel" aria-labelledby="seo-tab" tabIndex="0">

                            <div className="form-group mb-3">
                                <label htmlFor="">Meta Title</label>
                                <input type="text" name='meta_title' onChange={handleInput} value={categoryInput.meta_title} className='form-control' />
                                <small className='text-danger'>{error.meta_title}</small>

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
                    <button type='submit' className='btn btn-primary px-4 float-end m-3'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditCategory