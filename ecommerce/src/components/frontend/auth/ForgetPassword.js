import React from 'react';

const ForgetPassword = () => {
  return (
    <>
      <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Forget Password</h4>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">Name</label>
                              <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Send OTP</button>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ForgetPassword;
