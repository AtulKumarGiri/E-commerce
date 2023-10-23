import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Orders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        document.title = "View Orders";

        axios.get(`/api/admin/orders`).then(res=>{
        if(res.data.status === 200){
            setOrders(res.data.orders);
            setLoading(false);
        }
        });
    }, []);

    var display_orders = "";

    if(loading){
        return <h4>Loading Orders....</h4>
    }else{
        display_orders = orders.map( (item) => {
        //   if(item.status === 0){
        //     productStatus = 'Shown';
        //   }else if(item.status === '1'){
        //     productStatus = 'Hidden';
        //   }
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.tracking_no}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              {/* <td><img src={`http://localhost:8000/${item.image}`} alt={item.name} width="50px" /></td> */}
              <td><Link to={`/admin/view-order/${item.id}`} className='btn btn-success btn-sm'>View</Link></td>
             </tr>
          )
        });
      }
    
      return (
        <div className='card mx-4 mt-3'>
          <div className="card-header">
            <h4>
              View Orders
            </h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tracking Number</th>
                    <th>Phone No.</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {display_orders}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
}

export default Orders