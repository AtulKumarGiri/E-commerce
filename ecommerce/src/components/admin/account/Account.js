import React from 'react'
import { Link } from 'react-router-dom'

function Account() {
  return (
    <div className='container'>
      <div className="card my-3 mx-4">
        <div className="card-header bg-light">
          <h4 className="text-center">Account Information</h4>
        </div>
        <div className="card-header">
          <h6 className='text-muted'>Basic Information</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div className="container">
              <table className="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>Admin</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone No.</th>
                    <td>+91 8481823182</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Role</th>
                    <td>Admin</td>
                  </tr>
                  <tr>
                    <th scope="row">Status</th>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <th scope="row">Action</th>
                    <td>
                      <Link to="#" className="btn btn-danger bg-danger btn-sm mx-1">
                        <i className="fa fa-ban mx-1"></i>
                        Deactivate
                      </Link>
                      <Link to="#" className="btn btn-success bg-success btn-sm mx-1">
                        <i className="fa fa-check mx-1"></i>
                        Activate
                      </Link>
                      <Link to="/admin/edit-account" className="btn btn-success bg-success btn-sm mx-1">
                        <i className="fa fa-edit mx-1"></i>
                        Edit Account Information
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card-header">
          <h6 className='text-muted'>Login Creadentials</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div className="container">
              <table className="table table-striped table-bordered">
                <tbody>                  
                  <tr>
                    <th scope="row">Email</th>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Password</th>
                    <td>12345678</td>
                  </tr>
                  <tr>
                    <th scope="row">Action</th>
                    <td>
                      <Link to="/admin/reset-password" className="btn btn-warning bg-warning btn-sm mx-1">
                        <i className="fa fa-edit mx-1"></i>
                        Change Password
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account