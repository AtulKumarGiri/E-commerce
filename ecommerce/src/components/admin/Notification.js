import React from 'react'
import { Link } from 'react-router-dom'

function Notification() {
  return (
    <div className='container'>
        <div className="card mx-4 my-3">
          <div className="card-header">
            <h4>Notification
              <Link className="btn btn-sm float-end btn-danger" to='#'><i className="fa fa-trash"></i> Remove All</Link>
            </h4>
          </div>
          <div className="card-body">
            <div className="form-group border pt-2 pb-1 px-3 d-flex align-items-center justify-content-between">
                <h6>You have new Notification</h6>
                <div className="operations">
                  <Link><i className="btn btn-sm btn-danger mx-1 fa fa-trash"></i></Link>
                  <Link><i className="btn btn-sm btn-primary mx-1 fa fa-eye"></i></Link>
                </div>
            </div>
            <div className="form-group border pt-2 pb-1 px-3 d-flex align-items-center justify-content-between">
                <h6>You have new Notification</h6>
                <div className="operations">
                  <Link><i className="btn btn-sm btn-danger mx-1 fa fa-trash"></i></Link>
                  <Link><i className="btn btn-sm btn-primary mx-1 fa fa-eye"></i></Link>
                </div>
            </div>
            <div className="form-group border pt-2 pb-1 px-3 d-flex align-items-center justify-content-between">
                <h6>You have new Notification</h6>
                <div className="operations">
                  <Link><i className="btn btn-sm btn-danger mx-1 fa fa-trash"></i></Link>
                  <Link><i className="btn btn-sm btn-primary mx-1 fa fa-eye"></i></Link>
                </div>
            </div>
            <div className="form-group border pt-2 pb-1 px-3 d-flex align-items-center justify-content-between">
                <h6>You have new Notification</h6>
                <div className="operations">
                  <Link><i className="btn btn-sm btn-danger mx-1 fa fa-trash"></i></Link>
                  <Link><i className="btn btn-sm btn-primary mx-1 fa fa-eye"></i></Link>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Notification