import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/contactUs.css';
import Dointed from '../assests/images/dointed1.png';
import User from '../assests/images/user1.png';
const Repots = () => {
  return (
    <div>
      <Header/>
        <div className='contactName reportSection'>
          <h3>Report</h3>
          <p>Track your support for cinema through this donation report</p>
        </div>

        <div className='reportContent'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='reportLeft'>
                  <h4>Donated Movies</h4>

                  <div className='dontedMovies'>
                    <div className='dontedLeft'>
                      <img className='img-fluid donterdMoview' src={Dointed} alt="Donted Movie"/>
                      <div>
                        <h5>The Wild Robot</h5>
                        <p>Science fiction | Animated</p>
                      </div>
                    </div>
                    <h6>₹ <span>400k</span></h6>
                  </div>

                  <div className='dontedMovies'>
                    <div className='dontedLeft'>
                      <img className='img-fluid donterdMoview' src={Dointed} alt="Donted Movie"/>
                      <div>
                        <h5>The Wild Robot</h5>
                        <p>Science fiction | Animated</p>
                      </div>
                    </div>
                    <h6>₹ <span>400k</span></h6>
                  </div>

                  <div className='dontedMovies'>
                    <div className='dontedLeft'>
                      <img className='img-fluid donterdMoview' src={Dointed} alt="Donted Movie"/>
                      <div>
                        <h5>The Wild Robot</h5>
                        <p>Science fiction | Animated</p>
                      </div>
                    </div>
                    <h6>₹ <span>400k</span></h6>
                  </div>

                  <div className='dontedMovies'>
                    <div className='dontedLeft'>
                      <img className='img-fluid donterdMoview' src={Dointed} alt="Donted Movie"/>
                      <div>
                        <h5>The Wild Robot</h5>
                        <p>Science fiction | Animated</p>
                      </div>
                    </div>
                    <h6>₹ <span>400k</span></h6>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='reportRight'>
                  <h4>Donors Name</h4>

                  <ul>
                    <li>
                      <Link to="/">
                        <img className='img-fluid' src={User} alt="User"/>
                        <span>Jaydon Schleifer</span>
                      </Link>
                    </li>

                     <li>
                      <Link to="/">
                        <img className='img-fluid' src={User} alt="User"/>
                        <span>Jaydon Schleifer</span>
                      </Link>
                    </li>

                     <li>
                      <Link to="/">
                        <img className='img-fluid' src={User} alt="User"/>
                        <span>Jaydon Schleifer</span>
                      </Link>
                    </li>

                     <li>
                      <Link to="/">
                        <img className='img-fluid' src={User} alt="User"/>
                        <span>Jaydon Schleifer</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      <Footer/>
    </div>
  )
}

export default Repots
