import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert';


function Navbar() {
    const history = useNavigate();
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem('auth_name');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);
    
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
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle mx-3" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item fs-6" to="/login"><i className="fa fa-sign-in"></i>Signin</Link></li>
                        <li><Link className="dropdown-item fs-6" to="/register"><i className="fa fa-sign-out"></i>Signup</Link></li>
                    </ul>
                </li>
            </>
        );
    }else{
        AuthButtons = (
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle mx-3" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i>{userName ? userName : "Account Name"}</Link>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                
                <li><Link className="dropdown-item text-dark" to="/account">My Account</Link></li>
                <li><Link className="dropdown-item text-dark" to="/reset-password">Change Password</Link></li>
                {/* {userName === 'Admin' && (
                    <li><Link className="dropdown-item text-dark" to="/admin/dashboard">View Dashboard</Link></li>
                )} */}
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item text-danger fs-6" to="/logout" onClick={logoutSubmit}><i className="fa fa-sign-out"></i>Logout</Link></li>

            </ul>
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