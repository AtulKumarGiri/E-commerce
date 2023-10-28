import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Navbar = () => {
    const history = useNavigate();

    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem('auth_name');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    useEffect(() => {
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
          const handleClick = (event) => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
          };
          sidebarToggle.addEventListener('click', handleClick);
          return () => {
            sidebarToggle.removeEventListener('click', handleClick);
          };
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

    return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3 text-white" to='/'>Acommerce</Link>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#!"><i className="fa fa-bars"></i></button>
        
        <ul className="navbar-nav d-flex align-items-center justify-content-end">
            <li className="nav-item">
                <Link className="nav-link text-white fs-6 mx-3" to="/admin/notification"><i className="fa fa-bell"></i> Notification</Link>    
            </li>

            <li className="nav-item dropdown bg-dark ">
                <Link className="nav-link dropdown-toggle text-light mx-3" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i> {userName ? userName : "Account Name"}</Link>
                <ul className="dropdown-menu bg-secondary dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item text-dark" to="/admin/account">My Account</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/admin/reset-password">Change Password</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item text-danger fs-6" to="/logout" onClick={logoutSubmit}><i className="fa fa-sign-out"></i>Logout</Link></li>
                </ul>
            </li>
        </ul>
    </nav>
  );

};

export default Navbar;