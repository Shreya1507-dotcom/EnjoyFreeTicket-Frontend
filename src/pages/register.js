import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/home.css';
import Header from '../components/userHeader';
import '../assests/css/contactUs.css';
import '../assests/css/loginUs.css';
import { UserRegister } from '../api';
import OtpInput from "react-otp-input";

import toastr from 'toastr';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  console.log("formData",formData)

  const [errors, setErrors] = useState({});
  const [otpScreen , setOtpScreen] =useState(false);
  const [otp , setOtp] =useState('');


  const handleOtpChange = (e) =>{
    e.preventDefault();
    alert('e',e)
  }

  // ✅ Handle input changes and validate in real-time
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict input rules
    if (name === 'mobile' && !/^\d{0,10}$/.test(value)) return; // max 10 digits
    if (name === 'name' && value && !/^[A-Za-z ]*$/.test(value)) return; // alphabets only

    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // ✅ Validate individual field
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length > 50) error = 'Name cannot exceed 50 characters';
        break;

      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
        break;

      case 'mobile':
        if (!value.trim()) error = 'Mobile number is required';
        else if (!/^\d{10}$/.test(value)) error = 'Mobile must be exactly 10 digits';
        break;

      case 'password':
        if (!value.trim()) error = 'Password is required';
        else if (value.length < 6) error = 'Password must be at least 6 characters';
        else if (value.length > 20) error = 'Password cannot exceed 20 characters';
        break;

      case 'confirmPassword':
        if (!value.trim()) error = 'Confirm Password is required';
        else if (value !== formData.password) error = 'Passwords do not match';
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // ✅ Handle form submission
 const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    let hasErrors = false;

    // Validate all fields and collect errors
    Object.keys(formData).forEach((field) => {
      let value = formData[field];
      let error = '';

      switch (field) {
        case 'name':
          if (!value.trim()) error = 'Name is required';
          else if (value.length > 50) error = 'Name cannot exceed 50 characters';
          break;

        case 'email':
          if (!value.trim()) error = 'Email is required';
          else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
          break;

        case 'mobile':
          if (!value.trim()) error = 'Mobile number is required';
          else if (!/^\d{10}$/.test(value)) error = 'Mobile must be exactly 10 digits';
          break;

        case 'password':
          if (!value.trim()) error = 'Password is required';
          else if (value.length < 6) error = 'Password must be at least 6 characters';
          else if (value.length > 20) error = 'Password cannot exceed 20 characters';
          break;

        case 'confirmPassword':
          if (!value.trim()) error = 'Confirm Password is required';
          else if (value !== formData.password) error = 'Passwords do not match';
          break;

        default:
          break;
      }

      if (error) hasErrors = true;
      newErrors[field] = error;
    });

    // Update all errors at once
    setErrors(newErrors);

    // Stop if any error
    if (hasErrors) {
      toastr.error('Please fix the errors before submitting.');
      return;
    }

    // Proceed with submission
    handleSubmittedData();
  };


  const handleSubmittedData = async () => {
    try {
      const NewformData = new FormData();
      NewformData.append('role',"user");
      NewformData.append('email',formData.email);
      NewformData.append('name',formData.name);
      NewformData.append('password',formData.password);
      NewformData.append('confirmPassword',formData.confirmPassword);
      NewformData.append('mobile',formData.mobile);

      const response = await UserRegister(NewformData);
       if (response?.data?.status) {
        toastr.success(response?.data?.message);
        setOtpScreen(true)
       }
    } catch (error) {
      console.error('Error :', error);
      toastr.error('Something went wrong. Please try again.');
    } 
  };

  return (
    <div className='loginSection'>
      <Header />
      <div className='loginUs'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='signUpSectio'>
                <div className='loginTitle'>
                  <h3>Sign Up</h3>
                  <p>Create your profile in just a few steps.</p>
                </div>

                <div className='loginInfoForm'>
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        className='form-control'
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <small className='text-danger'>{errors.name}</small>}
                    </div>

                    {/* Email */}
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        className='form-control'
                        type='text'
                        name='email'
                        placeholder='Enter Email Address'
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <small className='text-danger'>{errors.email}</small>}
                    </div>

                    {/* Mobile */}
                    <div className='form-group'>
                      <label>Mobile Number</label>
                      <input
                        className='form-control'
                        type='text'
                        name='mobile'
                        placeholder='Enter Mobile Number'
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {errors.mobile && <small className='text-danger'>{errors.mobile}</small>}
                    </div>

                    {/* Password */}
                    <div className='form-group'>
                      <label>Password</label>
                      <input
                        className='form-control'
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && <small className='text-danger'>{errors.password}</small>}
                    </div>

                    {/* Confirm Password */}
                    <div className='form-group'>
                      <label>Confirm Password</label>
                      <input
                        className='form-control'
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && (
                        <small className='text-danger'>{errors.confirmPassword}</small>
                      )}
                    </div>

                    {/* Submit */}
                    <div className='form-group mt-4'>
                      <input className='form-control loginBtn' value='Sign Up' type='submit' />
                    </div>
                  </form>

                  <p>
                    Already have an account? <Link to='/login'>Log In</Link>
                  </p>
                </div>
              </div>
            </div>

            {otpScreen && (
              <div className='otpdiv'>
                <OtpInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={6}
                    renderInput={(props, index) => (
                      <input
                        {...props}
                        key={index}
                        className="form-control mx-1"
                        style={{
                          width: "50px",
                          height: "50px",
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      />
                    )}
                  />
              </div>
            )}

            <div className='col-md-6'>{/* right side image / illustration */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
