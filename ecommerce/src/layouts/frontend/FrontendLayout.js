import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import publicRouteList from '../../routes/PublicRouteList';
import Footer from './Footer';


const FrontendLayout = () => {
  
  return (
    <div>
      <Navbar />
        <div>
          <Routes>
              {publicRouteList.map((routeData, idx) => (
                  <Route
                  key={idx}
                  path={routeData.path}
                  name={routeData.name}
                  element={(routeData.element)}  
                  />
              ))}  
                                
          </Routes>
        </div>
      <Footer />
    </div>
  );
};

export default FrontendLayout;

