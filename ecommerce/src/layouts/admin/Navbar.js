import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3 text-white" to='/'>Acommerce</Link>
        {/* <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#!"><i className="fa fa-bars"></i></button> */}
        
        <ul className="navbar-nav d-flex align-items-center justify-content-end">
            <li className="nav-item">
                <Link className="nav-link text-white fs-6" to="/admin/profile"><i className="fa fa-user"></i> Profile</Link>    
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white fs-6" to="/admin/notification"><i className="fa fa-bell"></i> Notification</Link>    
            </li>
            <li className="nav-item">
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-warning" id="btnNavbarSearch" type="button"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;