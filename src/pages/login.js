import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/userHeader';
import '../assests/css/home.css';
import '../assests/css/contactUs.css';
import '../assests/css/loginUs.css';
import { UserLogin } from '../api';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';

const LoginUs = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let msg = "";

    if (name === "email") {
      if (!value) msg = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) msg = "Enter a valid email";
    }

    if (name === "password") {
      if (!value) msg = "Password is required";
      else if (value.length < 6) msg = "Password must be at least 6 characters";
    }

    setErrors(prev => ({ ...prev, [name]: msg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);

    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField("email", email);
    validateField("password", password);

    if (!errors.email && !errors.password && email && password) {
      handleLogin()
    }
  };

  const handleLogin = async () => {
    // alert(otp)
    try {
      const NewformData = new FormData();
      NewformData.append('role', 'user');
      NewformData.append('email', email);
      NewformData.append('password', password);

      const response = await UserLogin(NewformData);

      if (response?.data?.status) {
        toastr.success(response?.data?.message);
        navigate('/')  
      }
    } catch (error) {
      console.error('Error :', error);
      toastr.error(error.response?.data?.message ||'Something went wrong. Please try again.');
    }
  }

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
                  <form onSubmit={handleSubmit}>
                    
                    <div className='form-group'>
                      <label>Email</label>
                      <input 
                        name="email"
                        className='form-control'
                        type='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Enter Email Address'
                      />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>

                    <div className='form-group'>
                      <label>Password</label>
                      <input 
                        name="password"
                        className='form-control'
                        type='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Enter Password'
                      />
                      {errors.password && <small className="text-danger">{errors.password}</small>}
                      <Link className='forgotPassword' to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <div className='form-group'>
                      <input className='form-control loginBtn' value="Login" type="submit"/>
                    </div>

                  </form>

                  <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
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
