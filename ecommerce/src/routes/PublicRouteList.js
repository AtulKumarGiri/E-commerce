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
import Faq from '../components/frontend/Faq';
import CancellationRefund from '../components/frontend/CancellationRefund';
import Privacy from '../components/frontend/Privacy';
import HelpCenter from '../components/frontend/HelpCenter';
import Security from '../components/frontend/Security';
import ThankYou from '../components/frontend/ThankYou';
import Terms from '../components/frontend/Terms';
import ForgetPassword from '../components/frontend/auth/ForgetPassword';
import ResetPassword from '../components/frontend/auth/ResetPassword';
import VerifyOTP from '../components/frontend/auth/VerifyOTP';
import Mobile from '../components/frontend/products/mobile';

const publicRouteList = [
    { path: '/', exact:true, name:'Home', element: <Home /> },
    { path: '/about', exact:true, name:'About', element: <About /> },
    { path: '/contact', exact:true, name:'Contact', element: <Contact /> },
    { path: '/privacy', exact:true, name:'Privacy', element: <Privacy /> },
    { path: '/help-center', exact:true, name:'HelpCenter', element: <HelpCenter /> },
    { path: '/security', exact:true, name:'Security', element: <Security /> },
    { path: '/frequently-asked-questions', exact:true, name:'Faq', element: <Faq /> },
    { path: '/terms-of-use', exact:true, name:'Terms', element: <Terms /> },
    { path: '/cancellation-and-refund', exact:true, name:'CancellationRefund', element: <CancellationRefund /> },
    { path: '/cart', exact:true, name:'Cart', element: <Cart /> },
    { path: '/checkout', exact:true, name:'Checkout', element: <Checkout /> },
    { path: '/thank-you', exact:true, name:'ThankYou', element: <ThankYou /> },
    { path: '/403', exact:true, name:'Page403', element: <Page403 /> },
    { path: '/404', exact:true, name:'Page404', element: <Page404 /> },
    { path: '/login', exact:true, name:'Login', element: <Login /> },
    { path: '/forget-password', exact:true, name:'ForgetPassword', element: <ForgetPassword /> },
    { path: '/otp-verification', exact:true, name:'VerifyOTP', element: <VerifyOTP /> },
    { path: '/reset-password', exact:true, name:'ResetPassword', element: <ResetPassword /> },
    { path: '/register', exact:true, name:'Register', element: <Register /> },
    { path: '/collections', exact:true, name:'ViewCategory', element: <ViewCategory /> },
    { path: '/collections/:slug', exact:true, name:'ViewProduct', element: <ViewProduct /> },
    { path: '/collections/:category_slug/:product_slug', exact:true, name:'ProductDetails', element: <ProductDetails /> },
    { path: '/collections/mobile/:product_slug', exact:true, name:'Mobile', element: <Mobile /> },
  ];
  
export default publicRouteList;
  
