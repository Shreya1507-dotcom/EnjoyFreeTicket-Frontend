import React, { useState } from 'react';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/contactUs.css';

const ContactUsNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict mobile input to digits only and max 10
    if (name === 'mobile' && !/^\d{0,10}$/.test(value)) return;

    // Restrict name to alphabets and spaces
    if (name === 'name' && value && !/^[A-Za-z ]*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (!/^[A-Za-z ]{3,50}$/.test(value)) error = 'Name must be 3-50 alphabets';
        break;
      case 'mobile':
        if (!value.trim()) error = 'Mobile Number is required';
        else if (!/^\d{10}$/.test(value)) error = 'Mobile must be 10 digits';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.length < 10) error = 'Message must be at least 10 characters';
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach(key => validateField(key, formData[key]));

    const hasErrors = Object.values(errors).some(err => err) || Object.values(formData).some(val => !val);
    if (hasErrors) {
      // alert('Please fix the errors before submitting!');
      return;
    }

    console.log('Form Submitted', formData);
    alert('Thank you for contacting us!');
    // Call API here
  };

  return (
    <div>
      <Header/>
      <div className='contactName'>
        <h3>Contact Us</h3>
        <p>Let’s connect! Drop us a message and we’ll respond shortly</p>
      </div>

      <div className='contactForm'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-5'>
              <h3>Have questions? Get in touch!</h3>
              <p>We’re here to help! Reach out to us for any questions or assistance</p>

              <div className='contectInfo'>
                <p>Mail Us</p>
                <h5 className="footerHeadding">Movie@yopmail.com</h5>

                <p>Call Us</p>
                <h5 className="footerHeadding">+91 1234567890</h5>
              </div>
            </div>

            <div className='col-md-7'>
              <div className='formInfoSection'>
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <div className='col-md-12'>
                      <input
                        type="text"
                        className='form-control'
                        placeholder='Full Name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <small className='text-danger'>{errors.name}</small>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className='col-md-6'>
                      <input
                        type="text"
                        className='form-control'
                        placeholder='Mobile Number'
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {errors.mobile && <small className='text-danger'>{errors.mobile}</small>}
                    </div>

                    <div className='col-md-6'>
                      <input
                        type="text"
                        className='form-control'
                        placeholder='Email Address'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <small className='text-danger'>{errors.email}</small>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className='col-md-12'>
                      <textarea
                        className='form-control'
                        name="message"
                        rows="4"
                        placeholder='Write here'
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <small className='text-danger'>{errors.message}</small>}
                    </div>
                  </div>

                  <input
                    className='form-control w-75 m-auto donateSubmitBtn'
                    value="Submit"
                    type='submit'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUsNew;
