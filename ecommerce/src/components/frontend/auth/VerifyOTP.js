import React from 'react';

const VerifyOTP = () => {
  return (
    <>
      <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Verify OTP</h4>
                        </div>
                        <div className="card-body">
                          <form>
                            <p className="text-danger">***A mail has been sent to your email account with an OTP, provide the OTP below to change the Password.***</p>
                            <div className="mb-3">
                              <label htmlFor="otp" className="form-label">Enter OTP</label>
                              <input type="text" className="form-control" id="otp" placeholder="Enter OTP" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Verify OTP</button>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default VerifyOTP;
