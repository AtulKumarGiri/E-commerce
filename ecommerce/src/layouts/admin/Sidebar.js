import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Sidebar = () => {

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


  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
                <Link className="nav-link text-white" to="/">
                    <div className="sb-nav-link-icon"><i className="fa fa-home"></i></div>
                    Home
                </Link>
                <hr />

                <Link className="nav-link text-white" to="/admin/dashboard">
                    <div className="sb-nav-link-icon"><i className="fa fa-dashboard"></i></div>
                    Dashboard
                </Link> <hr />

                
                <Link className="nav-link text-white" to="/admin/orders">
                    <div className="sb-nav-link-icon"><i className="fa fa-cart-arrow-down"></i></div>
                    Orders
                </Link> <hr />

                <Link className="nav-link text-white collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="false" aria-controls="collapseCategory">
                    <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                    Category
                    <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                </Link> <hr />
                <div className="collapse" id="collapseCategory" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link text-white" to="/admin/add-category">Add Category</Link>
                        <Link className="nav-link text-white" to="/admin/view-category">View Category</Link>
                    </nav>
                </div>

                <Link className="nav-link text-white collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="false" aria-controls="collapseProduct">
                    <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                    Products
                    <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                </Link> <hr />
                <div className="collapse" id="collapseProduct" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link text-white" to="/admin/add-product">Add Product</Link> 
                        <Link className="nav-link text-white" to="/admin/view-product">View Product</Link> 
                    </nav>
                </div>
              
                <Link className="nav-link text-white" to="/admin/users">
                    <div className="sb-nav-link-icon"><i className="fa fa-users"></i></div>
                    Users
                </Link> <hr />
                
            </div>
        </div>
        <Link to="/logout" className='btn btn-md text-light fw-bolder sb-sidenav-footer' onClick={logoutSubmit}>
            <i className="fa fa-sign-out"></i>Logout
        </Link>
    </nav>
  );
};

export default Sidebar;