import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../assests/css/home.css';
import Header from '../components/userHeader';
import '../assests/css/contactUs.css';
import '../assests/css/loginUs.css';
const LoginUs = () => {

  return (
    <div className='loginSection'>
      <Header/>
      <div className='loginUs'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='forgotPasswordSection d-none'>
                <div className='loginTitle'>
                  <h3>Forgot Password?</h3>
                  <p>Enter your email and we'll send you reset instructions</p>
                </div>
                <div className='loginInfoForm'>
                  <form>
                    <div className='form-group'>
                      <label>Email</label>
                      <input  className='form-control' type='text' placeholder='Enter Email Address'/>
                    </div>

                    <div className='form-group'>
                      <input className='form-control loginBtn' value="Continue" type="submit"/>
                    </div>
                  </form>

                  <p>Already have an account? <Link to="/signup">Log In</Link></p>
                </div>
              </div>

              <div className='resetPasswordSection'>
                <div className='loginTitle'>
                  <h3>Reset Password?</h3>
                  <p>Enter a new password below to change your password</p>
                </div>
                <div className='loginInfoForm'>
                  <form>
                    <div className='form-group'>
                      <label>Password</label>
                      <input  className='form-control' type='password' placeholder='Enter Password'/>
                    </div>

                     <div className='form-group'>
                      <label>Confirm Password</label>
                      <input  className='form-control' type='password' placeholder='Confirm Password'/>
                    </div>

                    <div className='form-group'>
                      <input className='form-control loginBtn' value="Change" type="submit"/>
                    </div>
                  </form>

                  <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
              </div>

            </div>
            <div className='col-md-6'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginUs
