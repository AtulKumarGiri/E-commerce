import React from 'react';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <>
    <div className="container-fluid py-3 bg-light">
      <div className="container mb-5 py-3 px-4 bg-white privacy">
        <h4 className="text-center">Privacy Policy</h4>

      
      {/* <h1>Privacy Policy</h1> */}

      <p>This Privacy Policy outlines the types of personal information that [Your Company Name] collects and how it is used. Your use of our website and services indicates your agreement with this policy. Please read this policy carefully.</p>

      <h6>Information We Collect</h6>
      <p>We may collect the following types of information when you visit our website or use our services:</p>
      <ul>
        <li>Personal information such as your name, email address, phone number, and shipping address.</li>
        <li>Information about your transactions with us, including purchase history.</li>
        <li>Log files and analytics data, such as your IP address, browser type, and referring website.</li>
      </ul>

      <h6>How We Use Your Information</h6>
      <p>We use your personal information for the following purposes:</p>
      <ul>
        <li>To process and fulfill orders and provide customer support.</li>
        <li>To send you order updates and promotional materials.</li>
        <li>To improve our website and services through analytics.</li>
      </ul>

      <h6>Sharing Your Information</h6>
      <p>We may share your personal information with third parties for the following reasons:</p>
      <ul>
        <li>With service providers who assist us in fulfilling orders and providing customer support.</li>
        <li>To comply with legal obligations or protect our rights and safety.</li>
        <li>With your consent or as otherwise disclosed at the time of collection.</li>
      </ul>

      <h6>Security</h6>
      <p>We take security measures to protect your personal information, but no method of transmission over the internet is completely secure. Acommerce cannot guarantee the security of your information.</p>

      <h6>Access and Control</h6>
      <p>You have the right to access and update your personal information. You can also opt out of promotional communications at any time.</p>

      <h6>Changes to this Privacy Policy</h6>
      <p>Acommerce may update this privacy policy from time to time. We will notify you of any significant changes through email or a notice on our website.</p>

      <h6>Contact Us</h6>
      <p className='d-flex'>If you have any questions or concerns regarding this privacy policy, please &nbsp; <Link to='/contact' className='nav-link fw-bold'> Contact Us</Link>.</p>
    
      </div>
    </div>
    </>
  );
}

export default Privacy;
