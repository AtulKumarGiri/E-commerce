import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Login() {

    const history = useNavigate();


    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: { email: '', password: '' },
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/login`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal('Success', res.data.message, 'success');
                    if(res.data.role === 'admin'){
                        history('/admin/dashboard');

                    }else{
                        history('/');
                    }

                }else if(res.data.status === 401){
                    swal('Warning', res.data.message, 'warning');

                }else{
                    setLogin({...loginInput, error_list: res.data.validation_errors });

                }
            }).catch(error => {
                console.error("Error logging in:", error);
                if (error.response && error.response.data && error.response.data.message) {
                    alert(`Login failed: ${error.response.data.message}`);
                  } else {
                    alert('An error occurred while logging in. Please try again.');
                  }
                });
        }); 
    }

  return (
    <div>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={loginSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Email ID</label>
                                    <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control" />
                                    <span>{loginInput.error_list.email}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control" />
                                    <span>{loginInput.error_list.password}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <Link to='/register' className="text-muted nav-link text-dark">New at Accomerce? Create an account</Link>
                            <Link to='/forget-password' className="text-muted nav-link text-dark">Forget Password</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login