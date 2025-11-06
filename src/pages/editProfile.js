import React from 'react'

import { Link } from 'react-router-dom';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/aboutUs.css';
import History from '../assests/images/dointed1.png';

const EditProfile = () => {
  
  return (
    <div>
      <Header/>
      <div className='editProfile'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-3">
              <h4>
                <button className='editBack'>
                  ⬅ Back
                </button>
              </h4>
              <ul className="nav nav-tabs editProfileList" role="tablist">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                  >
                   <i class="fa-solid fa-user-tie"></i> 
                   Edit Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#menu1"
                    type="button"
                    role="tab"
                  >
                    <i class="fa-solid fa-key"></i>
                   Change Password
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#menu2"
                    type="button"
                    role="tab"
                  >
                  <i class="fa-solid fa-key"></i>
                   Donation History
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <div className="tab-content editProfileContent">
                <div
                  id="home"
                  className="container tab-pane fade show active"
                  role="tabpanel"
                >
                  <h4>Edit ProfileHOME</h4>
                  <form>
                    <div className='form-group mb-3'>
                      <label>Upload Profile</label>
                      <input className='form-control' type='file' placeholder='Upload Profile'/>
                    </div>

                    <div className='form-group mb-3'>
                      <label>Name</label>
                      <input className='form-control' type='text' placeholder='Zaire Lipshutz'/>
                    </div>

                    <div className='form-group mb-3'>
                      <label>Email</label>
                      <input className='form-control' type='text' placeholder='zaire@gmail.com'/>
                    </div>

                    <div className='form-group mb-3'>
                      <label>Mobile Number</label>
                      <input className='form-control' type='text' placeholder='+91 1234567890'/>
                    </div>


                    <div className='form-group mt-5'>
                      <input className='form-control editProfileBtn' type='Submit' value="Save"/>
                    </div>
                  </form>
                </div>
                <div
                  id="menu1"
                  className="container tab-pane fade"
                  role="tabpanel"
                >
                  <h4>Change Password</h4>
                
                <form>
                    <div className='form-group mb-3'>
                      <label>Password</label>
                      <input className='form-control' type='text' placeholder='Password'/>
                    </div>

                    <div className='form-group mb-3'>
                      <label>Confirm Password</label>
                      <input className='form-control' type='password' placeholder='Confirm Password'/>
                    </div>


                    <div className='form-group mt-5'>
                      <input className='form-control editProfileBtn' type='Submit' value="Save"/>
                    </div>
                  </form>
                </div>
                <div
                  id="menu2"
                  className="container tab-pane fade"
                  role="tabpanel"
                >
                  <h4>Donation History</h4>
                  
                  <ul className='historyDataList'>
                    <li>
                      <div className='leftHistory'>
                        <img className='img-fluid' src={History} alt="History"/>
                        <div className='historyContent'>
                          <h5>The Wild Robot</h5>
                          <p>Science fiction | Animated</p>
                        </div>
                      </div>
                      <div className='rightHistory'>
                        <h5>₹ 400k</h5>
                        <p>29 Aug 2025 , 09:45PM</p>
                      </div>
                    </li>

                     <li>
                      <div className='leftHistory'>
                        <img className='img-fluid' src={History} alt="History"/>
                        <div className='historyContent'>
                          <h5>The Wild Robot</h5>
                          <p>Science fiction | Animated</p>
                        </div>
                      </div>
                      <div className='rightHistory'>
                        <h5>₹ 400k</h5>
                        <p>29 Aug 2025 , 09:45PM</p>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default EditProfile
