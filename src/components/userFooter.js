import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assests/images/footerLogo.png'
import '../assests/css/home.css';
import '../assests/css/headder.css';
import '../assests/css/style.css'; // ✅ update path if required

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
     <footer>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-5'>
            <img className="img-fluid footerLogo" src={FooterLogo} alt ="Logo"/>
            <p className='footerContent '>Empowering independent filmmakers and connecting audiences with extraordinary stories.</p>
          </div>

          <div className='col-md-4'>
            <h5 className='footerHeadding'>Quick Links</h5>
            <ul className='footerList'>
               <li>
                  <Link to="/privacy-policy">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms-and-condition">Terms and Conditions</Link>
                </li>
            </ul>
          </div>

          <div className='col-md-3 contectInfo'>
            <h5 className='footerHeadding'>Quick Links</h5>
            <p>Mail Us</p>

            <h5 className='footerHeadding'>Movie@yopmail.com</h5>
            <p>Call Us</p>

            <h5 className='footerHeadding'>+91 1234567890</h5>
          </div>
        </div>

        <div className='copyRight'>
          <div className='row'>
            <div className='col-md-6'>
              <p className='copyRightTitle'>© 2025 EnjoyFreeTicket. All rights reserved.</p>
            </div>
            <div className='col-md-6 text-end'>
              <ul className='copyRightList'>
                <li>
                  <Link to="/privacy-policy">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms-and-condition">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     </footer>
    </>
  );
};

export default Footer;
