import axios from 'axios';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert';


function Navbar() {
    const history = useNavigate();
    
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if(res.data.status === 200){
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal('Success', res.data.message, 'success');
                history('/');
            }else {
                console.error('Logout failed:', res.data.message);
              }
            })
            .catch(error => {
              console.error('Logout failed:', error);
        });
    }

    var AuthButtons = '';
    if(!localStorage.getItem('auth_token')){
        AuthButtons = (
            <> 
                <li className="nav-item mx-1">
                    <Link className="nav-link fs-5" to='/login'><i className="fa fa-user"></i> Signin</Link>
                </li>    
            </>
        );
    }else{
        AuthButtons = (
            <li className="nav-item">
                <button type='button' onClick={logoutSubmit} className="btn btn-warning btn-outline-none fs-6" to="/logout"><i className="fa fa-sign-out"></i>Logout</button>
            </li>
        );
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/"> <div className="fs-3">Acommerce</div> </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-end">
                            
                            <li className="nav-item mx-1">
                                <div type="button" className="nav-link fs-5" data-toggle="modal" data-target="#exampleModal">
                                    <i className="fa fa-search"></i> Search
                                </div>
                            </li>

                                <div className="modal fade searchModal" id="exampleModal" tabIndex="1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                                
                                            <div className="modal-body">
                                                <form className="form-inline d-flex align-items-center justify-content-center m-auto">
                                                    <input className="form-control m-auto text-light" type="search" placeholder="Search for Products, Brands & more" aria-label="Search" />
                                                    <button className="btn btn-dark btn-lg my-sm-0" type="submit"><i className="fa fa-search"></i></button>
                                                    
                                                </form>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>


                            <li className="nav-item mx-1">
                                <Link className="nav-link fs-5" to="/cart"><i className='fa fa-cart-plus'></i> Cart</Link>
                            </li>

                            {AuthButtons}

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar