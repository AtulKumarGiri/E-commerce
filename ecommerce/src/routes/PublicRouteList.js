import Home from '../components/frontend/Home';
import About from '../components/frontend/About';
import Contact from '../components/frontend/Contact';
import Page403 from '../errors/Page403';
import Page404 from '../errors/Page404';
import Login from '../components/frontend/auth/Login';
import Register from '../components/frontend/auth/Register';
import ViewCategory from '../components/frontend/collections/ViewCategory';
import ViewProduct from '../components/frontend/collections/ViewProduct';
import ProductDetails from '../components/frontend/collections/ProductDetails';
import Cart from '../components/frontend/Cart';
import Checkout from '../components/frontend/Checkout';

const publicRouteList = [
    { path: '/', exact:true, name:'Home', element: <Home /> },
    { path: '/about', exact:true, name:'About', element: <About /> },
    { path: '/contact', exact:true, name:'Contact', element: <Contact /> },
    { path: '/cart', exact:true, name:'Cart', element: <Cart /> },
    { path: '/checkout', exact:true, name:'Checkout', element: <Checkout /> },
    { path: '/403', exact:true, name:'Page403', element: <Page403 /> },
    { path: '/404', exact:true, name:'Page404', element: <Page404 /> },
    { path: '/login', exact:true, name:'Login', element: <Login /> },
    { path: '/register', exact:true, name:'Register', element: <Register /> },
    { path: '/collections', exact:true, name:'ViewCategory', element: <ViewCategory /> },
    { path: '/collections/:slug', exact:true, name:'ViewProduct', element: <ViewProduct /> },
    { path: '/collections/:category_slug/:product_slug', exact:true, name:'ProductDetails', element: <ProductDetails /> },
  ];
  
export default publicRouteList;
  
