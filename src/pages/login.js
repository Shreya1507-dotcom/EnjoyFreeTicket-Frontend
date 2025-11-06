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
              <div className='loginSection'>
                <div className='loginTitle'>
                  <h3>Log In</h3>
                  <p>Enter your credentials to proceed</p>
                </div>
                <div className='loginInfoForm'>
                  <form>
                    <div className='form-group'>
                      <label>Email</label>
                      <input  className='form-control' type='text' placeholder='Enter Email Address'/>
                    </div>

                    <div className='form-group'>
                      <label>Password</label>
                      <input className='form-control' type='text' placeholder='Enter Password'/>
                      <Link className='forgotPassword' to="/">Forgot Password?</Link>
                    </div>

                    <div className='form-group'>
                      <input className='form-control loginBtn' value="Login" type="submit"/>
                    </div>
                  </form>

                  <p>Don’t have an account? <Link to="/">Sign Up</Link></p>
                </div>
              </div>

              <div className='signUpSection d-none'>
                <div className='loginTitle'>
                  <h3>Sign Up</h3>
                  <p>Create your profile in just a few steps.</p>
                </div>
                <div className='loginInfoForm'>
                  <form>
                    <div className='form-group'>
                      <label>Name</label>
                      <input  className='form-control' type='text' placeholder='Enter Name'/>
                    </div>

                    <div className='form-group'>
                      <label>Email</label>
                      <input className='form-control' type='text' placeholder='Enter Email Address'/>
                    </div>

                    <div className='form-group'>
                      <label>Mobile Number</label>
                      <input className='form-control' type='text' placeholder='Enter Mobile Number'/>
                    </div>

                    <div className='form-group'>
                      <label>Password</label>
                      <input className='form-control' type='password' placeholder='Enter Password'/>
                    </div>

                    <div className='form-group'>
                      <label>Confirm Password</label>
                      <input className='form-control' type='password' placeholder='Confirm Password'/>
                    </div>


                    <div className='form-group mt-4'>
                      <input className='form-control loginBtn' value="Sign Up" type="submit"/ >
                    </div>
                  </form>

                  <p>Already have an account? <Link to="/">Log In</Link></p>
                </div>
              </div>

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

                  <p>Already have an account? <Link to="/">Log In</Link></p>
                </div>
              </div>

              <div className='resetPasswordSection d-none'>
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

                  <p>Already have an account? <Link to="/">Log In</Link></p>
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
