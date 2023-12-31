import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import axios from 'axios';
import swal from 'sweetalert';

function AdminPrivateRoute({ ...rest }) {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`/api/checkingAuthenticated`).then(res=>{
            if(res.status === 200){
                setAuthenticated(true);
            }
            setLoading(false);
        }) .catch(error => {
            console.error('Error checking authentication:', error);
            setLoading(false);
        });
        return () => {
            setAuthenticated(false);
        };
    }, []);

     axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.response.status === 401){
            swal("Unauthorized", err.response.data.message, 'warning').then(() => {
                return navigate('/');
            });
        }
        return Promise.reject(err);
     });

     axios.interceptors.response.use(function(response){
        return response;
     }, function(error){
        if(error.response.status === 403){
            swal("Forbidden", error.response.data.message, 'warning').then(() => {
                return navigate('/403');
            }); 
        }else if(error.response.status === 404){
            swal("404 Error", 'Url/Page Not Found', 'warning').then(() => {
                return navigate('/404');
            }); 
        } 
        return Promise.reject(error);
     });

    if(loading){
        return <h2>Loading...</h2>;
    }
    if (authenticated) {
        return <MasterLayout />;
       
    } else {
        return <Navigate to="/" />;
    }
}

export default AdminPrivateRoute;