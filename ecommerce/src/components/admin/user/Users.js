import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewAdmin, setViewAdmin] = useState(null);

  useEffect(() => {
      document.title = "View Users";
      axios.get(`/api/admin/users`).then(res=>{
      if(res.data.status === 200){
          setUsers(res.data.users);
          setLoading(false);
      }
      });
  }, []);

  const ViewUserDetails = (id) =>{
    axios.get(`/api/admin/users/${id}`).then((res) => {
      if(res.data.status === 200){
        setSelectedUser(res.data.user);
      }
    });
  }
  
  var SelectedUserRole = "";
  var SelectedUserStatus = "";
  if(selectedUser){
    if (selectedUser.role_as === 0) {
      SelectedUserRole = "User";
    } else if (selectedUser.role_as === 1) {
      SelectedUserRole = "Admin";
    } else if (selectedUser.role_as === 2) {
      SelectedUserRole = "Sub Admin";
    } else if (selectedUser.role_as === 3) {
      SelectedUserRole = "Seller";
    } 
    
    if (selectedUser.status === 1) {
      SelectedUserStatus = "Deactivated";
    }else if(selectedUser.status === 0){
      SelectedUserStatus = "Active";
    }
  }

  var display_users = "";
  var role = "";
  var status = "";

  if (loading) {
    return <h4>Loading Users....</h4>;
  } else {
    display_users = users.filter((user) => viewAdmin === null || (viewAdmin === "admin" && user.role_as === 1) || (viewAdmin === "subadmin" && user.role_as === 2)|| (viewAdmin === "seller" && user.role_as === 3) || (viewAdmin === "deactive" && user.status === 1))
    .map((item, index) => {
      if(item){
        if (item.role_as === 0) {
          role = "User";
        } else if (item.role_as === 1) {
          role = "Admin";
        } else if (item.role_as === 2) {
          role = "Sub Admin";
        } else if (item.role_as === 3) {
          role = "Seller";
        } 
        if (item.status === 1) {
          status = "Deactivated";
        }else if (item.status === 0) {
          status = "Active";
        }
      }
      const rowClassName = item.status === 1 ? "table-danger" : "";
      return (
        <tr key={item.id} className={rowClassName}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td></td>
          <td>{item.email}</td>
          <td>{role}</td>
          <td>
            <Link to={`/admin/users/${item.id}`} className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => ViewUserDetails(item.id)}>
              <i className="fa fa-eye"></i>
            </Link>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-5" id="staticBackdropLabel">View User</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    {/* <div className="card users"> */}
                      <div className="card-body">
                        <div className="table-responsive">
                          <div className="container">
                            {selectedUser && (
                              
                            <table className="table table-striped table-bordered">
                              <tbody>
                                <tr>
                                  <th scope="row">ID</th>
                                  <td>{selectedUser.id}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Name</th>
                                  <td>{selectedUser.name}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Phone No.</th>
                                  <td>+91 8481823182</td>
                                </tr>
                                <tr>
                                  <th scope="row">Email</th>
                                  <td>{selectedUser.email}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Role</th>
                                  <td>{SelectedUserRole}</td>
                                </tr>
                                <tr>
                                  <th scope="row">Status</th>
                                  <td>{SelectedUserStatus}</td>
                                </tr>
                                
                                <tr>
                                  <th scope="row">Action</th>
                                  <td>
                                    {selectedUser.status===0 ? 
                                      (<Link to="#" className="btn btn-danger bg-danger btn-sm mx-1">
                                        <i className="fa fa-ban mx-1"></i>
                                        Deactivate
                                      </Link>):(
                                      <Link to="#" className="btn btn-success bg-success btn-sm mx-1">
                                        <i className="fa fa-check mx-1"></i>
                                        Activate
                                      </Link>)
                                    }          
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            )}
                          </div>
                        </div>
                      </div>
                    {/* </div> */}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary btn-sm" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>


            {item.status===0 ? 
              (<Link className="btn btn-danger mx-2 btn-sm">
                <i className="fa fa-ban"></i>
              </Link>)
              :
              (<Link className="btn btn-success mx-2 btn-sm">
                <i className="fa fa-check"></i>
              </Link>)
            }          
          </td>
        </tr>
      );
    });
  }


  const handleViewAdmin = (adminType) => {
    setViewAdmin(adminType);
  };

  return (
    <div className='card users mx-4 mt-3'>
      <div className="card-header">
        <h4>
          View Users
              
            <Link to='/admin/add-sub-admin' className='btn btn-primary btn-sm float-end mx-2'>Add Sub Admin</Link>
            <button className="btn btn-dark btn-sm mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-sort"></i> Sort
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <Link
                className={viewAdmin === null ? "dropdown-item active" : "dropdown-item"}
                to="#"
                onClick={() => handleViewAdmin(null)}
              >
                View All Users
              </Link>
              <Link
                className={viewAdmin === "admin" ? "dropdown-item active" : "dropdown-item"}
                to="#"
                onClick={() => handleViewAdmin("admin")}
              >
                View Admin
              </Link>
              <Link
                className={viewAdmin === "subadmin" ? "dropdown-item active" : "dropdown-item"}
                to="#"
                onClick={() => handleViewAdmin("subadmin")}
              >
                View Sub Admin
              </Link>
              <Link
                className={viewAdmin === "seller" ? "dropdown-item active" : "dropdown-item"}
                to="#"
                onClick={() => handleViewAdmin("seller")}
              >
                View Seller
              </Link>
              <Link
                className={viewAdmin === "deactive" ? "dropdown-item active" : "dropdown-item"}
                to="#"
                onClick={() => handleViewAdmin("deactive")}
              >
                View Deactivate Accounts
              </Link>
            </ul>            
          </h4>  
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {display_users}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

export default Users