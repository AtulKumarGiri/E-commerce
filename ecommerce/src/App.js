import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import AdminPrivateRoute from './AdminPrivateRoute';
import PublicRoute from './PublicRoute';
import ScrollTop from './ScrollTop';

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
          <ScrollTop />
        <Routes>
          <Route path="/admin/*" name="Admin" element={<AdminPrivateRoute />} /> 
          <Route path="/*" name="Home" element={<PublicRoute />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

