import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="container-fluid mb-0 py-4 px-5 text-white footer">
        <div className="links">
          <div className="home-page-links d-flex align-items-start justify-content-between">
            <div className="about">
              <div className="footer-heading fs-6 mb-2">ABOUT</div>
                <ul className='p-0 d-block'>
                  <Link className='text-white' to='/'>Home </Link> <br />
                  <Link className='text-white' to='/about'>About Us </Link> <br />
                  <Link className='text-white' to='/contact'>Contact Us </Link> <br />
                </ul>
            </div>
            <div className="help">
                <div className="footer-heading fs-6 mb-2">HELP</div>
                <ul className='p-0 d-block'>
                  <Link className='text-white' to='/cancellation-and-refund'>Cancellation & Returns </Link> <br />
                  <Link className='text-white' to='/frequently-asked-questions'>FAQ </Link> <br />
                  <Link className='text-white' to='/help-center'>Help Center </Link> <br />
                </ul>
              </div>

              <div className="consumer-policy">
                <div className="footer-heading fs-6 mb-2">CONSUMER POLICY</div>        
                <ul className='p-0 d-block'>
                  <Link className='text-white' to='/privacy'>Privacy </Link> <br />
                  <Link className='text-white' to='/security'>Security </Link> <br />
                  <Link className='text-white' to='/terms-of-use'>Terms Of Use </Link> <br />
                </ul>    
              </div>

              <div className="mailing-address">
                <div className="footer-heading fs-6 mb-2">MAILING ADDRESS:</div>  
                <address>
                  123 Main Street<br />
                  Apartment 4B<br />
                  Springfield, IL 62701<br />
                  United States
                </address>
              </div>

              <div className="office-address">
                <div className="footer-heading fs-6 mb-2">OFFICE ADDRESS:</div>  
                <address>
                  456 Elm Street<br />
                  Suite 102<br />
                  Springfield, IL 62701<br />
                  United States
                </address>
              </div>

              <div className="social">
                <div className="footer-heading fs-6 mb-2">SOCIAL</div>  
                <ul className="p-0 d-flex align-items-start justify-content-between">
                  <li><Link to='' className='fs-5 m-0 p-0 text-white'><i className="fa fa-facebook"></i></Link></li>
                  <li><Link to='' className='fs-5 mx-2 p-0 text-white'><i className="fa fa-instagram"></i></Link></li>
                  <li><Link to='' className='fs-5 m-0 p-0 text-white'><i className="fa fa-twitter"></i></Link></li>
                  <li><Link to='' className='fs-5 mx-2 p-0 text-white'><i className="fa fa-linkedin"></i></Link></li>
                </ul>      
              </div>

          </div>
        </div>
        <hr />
        <div className="copy col-md-12 text-center">
          <div className="text-light">&copy; Copyright | Accomerce 2023 | All rights reserved</div>
          <p className="fs-6 mb-0 pb-0">Designed & Developed by Atul Kumar Giri</p>
        </div>
      </div>
    </>
  )
}

export default Footer