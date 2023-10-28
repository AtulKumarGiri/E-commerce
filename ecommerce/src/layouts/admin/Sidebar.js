import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

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


                <Link className="nav-link text-white collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseUser" aria-expanded="false" aria-controls="collapseUser">
                    <div className="sb-nav-link-icon"><i className="fa fa-users"></i></div>
                    Users
                    <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                </Link> <hr />
                <div className="collapse" id="collapseUser" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link text-white" to="/admin/add-sub-admin">Add Sub Admin</Link> 
                        <Link className="nav-link text-white" to="/admin/users">View Users</Link> 
                    </nav>
                </div>

                

                
            </div>
        </div>
    </nav>
  );


};

export default Sidebar;