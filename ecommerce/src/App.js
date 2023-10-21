import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Login from './components/frontend/auth/Login';
// import Register from './components/frontend/auth/Register';
import axios from 'axios';
import AdminPrivateRoute from './AdminPrivateRoute';
// import Page403 from './errors/Page403';
// import Page404 from './errors/Page404';
import PublicRoute from './PublicRoute';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {/* <Route exact path="/"  element={<Home />} />
          <Route exact path="/about"  element={<About />} />
          <Route exact path="/contact"  element={<Contact />} /> */}

          <Route path="/admin/*" name="Admin" element={<AdminPrivateRoute />} /> 
          <Route path="/*" name="Home" element={<PublicRoute />}/>
         

          {/* <Route path="/403"  element={<Page403 />} /> */}
          {/* <Route path="/404"  element={<Page404 />} /> */}
          {/* <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Login /> } />  */}
          {/* <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Register />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

