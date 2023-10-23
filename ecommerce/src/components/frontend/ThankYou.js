import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <div className='container'>
        <div className="row my-5">
            <div className="card card-body d-flex align-items-center justify-content-center bg-success text-white">
              <div>
                <h1>Thank You For Choosing us</h1>
              </div>
            </div>
            <Link to='/' className="btn btn-sm btn-primary col-md-6 mt-3 text-white fw-bold fs-3 m-auto">Go back to Home Page</Link>
        </div>
    </div>
  )
}

export default ThankYou