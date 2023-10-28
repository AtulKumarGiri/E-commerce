import Dashboard from "../components/admin/Dashboard";
import Account from "../components/admin/account/Account";
import Orders from "../components/admin/Orders";
import Notification from "../components/admin/Notification";

import AddCategory from "../components/admin/category/AddCategory";
import ViewCategory from "../components/admin/category/ViewCategory";
import EditCategory from "../components/admin/category/EditCategory";

import AddProduct from "../components/admin/product/AddProduct";
import ViewProduct from "../components/admin/product/ViewProduct";
import EditProduct from "../components/admin/product/EditProduct";

import Users from "../components/admin/user/Users";
import AddUser from "../components/admin/user/AddUser";
import EditUser from "../components/admin/user/EditUser";
import ResetPassword from "../components/frontend/auth/ResetPassword";
import EditAccount from "../components/admin/account/EditAccount";

const routes = [
    { path: '/admin', exact:true, name:'Admin' },
    { path: '/dashboard', exact:true, name:'Dashboard', element: <Dashboard /> },
    { path: '/orders', exact:true, name:'Orders', element: <Orders /> },
    { path: '/notification', exact:true, name:'Notification', element: <Notification /> },
    { path: '/reset-password', exact:true, name:'ResetPassword', element: <ResetPassword /> },
    
    // ACCOUNT ROUTES 
    { path: '/account', exact:true, name:'Account', element: <Account /> },
    { path: '/edit-account/', exact:true, name:'EditAccount', element: <EditAccount /> },


    // CATEGORIES ROUTES 
    { path: '/add-category', exact:true, name:'AddCategory', element: <AddCategory /> },
    { path: '/view-category', exact:true, name:'ViewCategory', element: <ViewCategory /> },
    { path: '/edit-category/:id', exact:true, name:'EditCategory', element: <EditCategory /> },
    
    // PRODUCTS ROUTES 
    { path: '/add-product', exact:true, name:'AddProduct', element: <AddProduct /> },
    { path: '/view-product', exact:true, name:'ViewProduct', element: <ViewProduct /> },
    { path: '/edit-product/:id', exact:true, name:'EditProduct', element: <EditProduct /> },

    // USERS ROUTES 
    { path: '/add-sub-admin', exact:true, name:'AddSubAdmin', element: <AddUser /> },
    { path: '/users', exact:true, name:'Users', element: <Users /> },
    { path: '/edit-user/:id', exact:true, name:'EditUser', element: <EditUser /> },


  ];
  
export default routes;
  
