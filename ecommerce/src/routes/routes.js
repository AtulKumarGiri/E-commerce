import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
import AddCategory from "../components/admin/category/AddCategory";
import ViewCategory from "../components/admin/category/ViewCategory";
import EditCategory from "../components/admin/category/EditCategory";
import AddProduct from "../components/admin/product/AddProduct";
import ViewProduct from "../components/admin/product/ViewProduct";
import EditProduct from "../components/admin/product/EditProduct";

const routes = [
    { path: '/admin', exact:true, name:'Admin' },
    { path: '/dashboard', exact:true, name:'Dashboard', element: <Dashboard /> },
    { path: '/profile', exact:true, name:'Profile', element: <Profile /> },

    // CATEGORIES ROUTES 
    { path: '/add-category', exact:true, name:'AddCategory', element: <AddCategory /> },
    { path: '/view-category', exact:true, name:'ViewCategory', element: <ViewCategory /> },
    { path: '/edit-category/:id', exact:true, name:'EditCategory', element: <EditCategory /> },
    
    // PRODUCTS ROUTES 
    { path: '/add-product', exact:true, name:'AddProduct', element: <AddProduct /> },
    { path: '/view-product', exact:true, name:'ViewProduct', element: <ViewProduct /> },
    { path: '/edit-product/:id', exact:true, name:'EditProduct', element: <EditProduct /> },
  ];
  
export default routes;
  
