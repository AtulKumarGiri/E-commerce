import React from 'react';
import { Link } from 'react-router-dom';

function AddUser() {
    return (
        <div className='container'>
            <div className="card mx-4 mt-3">
                <div className="card-header">
                    <h4>Add Sub Admin
                        <Link className="btn btn-primary btn-sm float-end" to='/admin/users'>View Users</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form className="row g-3">
                        <div className="form-group col-md-4">
                            <label for="firstname">First Name</label>
                            <input type="text" className="form-control" id="firstname" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="middlename">Middle Name</label>
                            <input type="text" className="form-control" id="middlename" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" />
                        </div>

                        <div className="form-group col-md-4">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="cofirm_password" className="form-label">Confirm Password</label>
                            <input type="text" className="form-control" id="cofirm_password" />
                        </div>
                        <div className="form-group col-12">
                            <label for="address" className="form-label">Address</label>
                            <textarea className="form-control" id="address" rows='3' placeholder="1234 Main St" ></textarea>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        {/* <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div> */}
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary btn-sm float-end">Create Sub Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser