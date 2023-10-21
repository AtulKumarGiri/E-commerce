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
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        );

    }else{
        AuthButtons = (
            <li className="nav-item">
                <button type='button' onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm bg-danger text-white" to="/logout">Logout</button>
            </li>
        );
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/collections">Collections</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
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