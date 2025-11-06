import React, { useState } from 'react';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/contactUs.css';

const PrivacyPolicy = () => {
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
        <h3>Privacy Policy</h3>
        <p>Let’s connect! Drop us a message and we’ll respond shortly</p>
      </div>

      <div className='contactForm'>
        <div className='container-fluid'>
          <p>At <strong>[Your Company Name]</strong> ("we", "us", "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use <strong>[Your Website URL]</strong>.</p>
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
            <li><strong>Personal Information:</strong> name, email address, phone number, postal address, and other information you provide during registration or when contacting support.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, operating system, pages visited, timestamps, and other analytics data.</li>
            <li><strong>Cookies & Tracking:</strong> cookies, local storage, and similar technologies to personalize and improve your experience.</li>
            </ul>


            <h2>2. How We Use Your Information</h2>
            <ul>
            <li>To provide, operate and maintain our services.</li>
            <li>To process registrations, bookings, transactions, and communications.</li>
            <li>To send important notices, updates, and marketing (only with permission where required).</li>
            <li>To analyze usage and improve our platform’s performance and user experience.</li>
            <li>To detect, prevent and address technical issues and fraud.</li>
            </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
