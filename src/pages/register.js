import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assests/css/home.css';
import Header from '../components/userHeader';
import '../assests/css/contactUs.css';
import '../assests/css/loginUs.css';
import { UserRegister } from '../api';
import OtpInput from 'react-otp-input';
import toastr from 'toastr';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [otpScreen, setOtpScreen] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleRegister = async () => {
    // alert(otp)
    try {
      const NewformData = new FormData();
      NewformData.append('role', 'user');
      NewformData.append('email', formData.email);
      NewformData.append('otp', otp);
      NewformData.append('name', formData.name);
      NewformData.append('password', formData.password);
      NewformData.append('confirmPassword', formData.confirmPassword);
      NewformData.append('mobile', formData.mobile);

      const response = await UserRegister(NewformData);

      if (response?.data?.status) {
        toastr.success(response?.data?.message);
        localStorage.setItem('user_id',response?.data?.message?.token);
        navigate('/')  
      }
    } catch (error) {
      console.error('Error :', error);
      toastr.error('Something went wrong. Please try again.');
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobile' && !/^\d{0,10}$/.test(value)) return;
    if (name === 'name' && value && !/^[A-Za-z ]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    if (name === 'name') {
      if (!value.trim()) error = 'Name is required';
      else if (value.length > 50) error = 'Name cannot exceed 50 characters';
    } 
    else if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
    } 
    else if (name === 'mobile') {
      if (!value.trim()) error = 'Mobile number is required';
      else if (!/^\d{10}$/.test(value)) error = 'Mobile must be exactly 10 digits';
    } 
    else if (name === 'password') {
      if (!value.trim()) error = 'Password is required';
      else if (value.length < 8) error = 'Password must be at least 8 characters';
      else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value)) 
        error = 'Password must contain at least one letter and one number';
    } 
    else if (name === 'confirmPassword') {
      if (!value.trim()) error = 'Confirm Password is required';
      else if (value !== formData.password) error = 'Passwords do not match';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    let hasError = false;

    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) hasError = true;
    });

    setErrors(newErrors);

    if (hasError) {
      toastr.error('Please fix the errors before submitting.');
      return;
    }

    handleSubmittedData();
  };

  const handleSubmittedData = async () => {
    try {
      const NewformData = new FormData();
      NewformData.append('role', 'user');
      NewformData.append('email', formData.email);
      NewformData.append('name', formData.name);
      NewformData.append('password', formData.password);
      NewformData.append('confirmPassword', formData.confirmPassword);
      NewformData.append('mobile', formData.mobile);

      const response = await UserRegister(NewformData);

      if (response?.data?.status) {
        toastr.success(response?.data?.message);
        setOtpScreen(true);
      }
    } catch (error) {
      console.error('Error :', error);
      toastr.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="loginSection">
      <Header />
      <div className="loginUs">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="signUpSectio">
                <div className="loginTitle">

                  {/* ---------- SIGNUP SCREEN ---------- */}
                  {!otpScreen && (
                    <>
                      <h3>Sign Up</h3>
                      <p>Create your profile in just a few steps.</p>
                    </>
                  )}

                  {/* ---------- OTP SCREEN ---------- */}
                  {otpScreen && (
                    <>
                      <h3>Enter the OTP sent to your mobile number.</h3>
                    </>
                  )}
                </div>

                {/* ---------- FORM SECTION ---------- */}
                {!otpScreen ? (
                  <div className="loginInfoForm">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>

                      <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                          className="form-control"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                      </div>

                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          className="form-control"
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        {errors.confirmPassword && (
                          <small className="text-danger">{errors.confirmPassword}</small>
                        )}
                      </div>

                      <div className="form-group mt-4">
                        <input className="form-control loginBtn" value="Sign Up" type="submit" />
                      </div>
                    </form>

                    <p>
                      Already have an account? <Link to="/login">Log In</Link>
                    </p>
                  </div>
                ) : (
                  /* ---------- OTP INPUT UI ---------- */
                  <div className="otpdiv mt-4 d-flex flex-column text-center">
                     <OtpInput
                        value={otp}
                        onChange={handleOtpChange}
                        numInputs={6}
                        inputStyle={{
                          width: "50px",
                          height: "50px",
                          fontSize: "20px",
                          textAlign: "center",
                          margin: "0 5px",
                          border: "1px solid #ced4da",
                          borderRadius: "4px"
                        }}
                        renderInput={(props) => <input {...props} />}
                      />
                 
                    <button onClick={()=>handleRegister()} className="btn btn-success w-100 mt-4">
                      Verify OTP
                    </button>
                  </div>
                )}

              </div>
            </div>

            <div className="col-md-6">{/* illustration */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
