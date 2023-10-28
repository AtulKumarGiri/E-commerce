import React from 'react';

const ResetPassword = () => {
  return (
    <>
      <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Reset Your Password</h4>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="password" className="form-label">Name</label>
                              <input type="password" className="form-control" id="password" placeholder="New Password" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="confirm-password" className="form-label">Email</label>
                              <input type="password" className="form-control" id="confirm-password" placeholder="Confirm New Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Change Password</button>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ResetPassword;
