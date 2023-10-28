import React from 'react';
import '../../assets/admin/css/styles.css';


import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import  routes  from '../../routes/routes';




const MasterLayout = () => {
  
  return (
    <div className='sb-nav-fixed'>
        <Navbar />
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <Routes>
                        {routes.map((route, idx) => (
                            <Route
                            key={idx}
                            path={route.path}
                            name={route.name}
                            element={(route.element)}  
                            />
                        ))}  
                        <Route
                            path='*'
                            element={<Navigate to='/admin/dashboard' />}
                        />                   
                    </Routes>
                </main>
            </div>
        </div>
    </div>    
  );
};

export default MasterLayout;

