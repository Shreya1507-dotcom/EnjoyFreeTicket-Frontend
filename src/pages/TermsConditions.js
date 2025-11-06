import React, { useState } from 'react';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/contactUs.css';

const TermsConditions = () => {
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
        <h3>Terms and Conditions</h3>
        <p>Let’s connect! Drop us a message and we’ll respond shortly</p>
      </div>

      <div className='contactForm'>
        <div className='container-fluid'>
          <p>Welcome to <strong>[Your Company Name]</strong>! These Terms & Conditions govern your use of <strong>[Your Website URL]</strong> and the services we provide. By accessing or using the website, you agree to be bound by these terms.</p>


            <h2>1. Eligibility</h2>
            <p>You must be at least 18 years old to use our services. By using the site, you represent that you meet this requirement.</p>


            <h2>2. Accounts</h2>
            <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You agree to provide accurate and up-to-date information when creating an account.</li>
            </ul>


            <h2>3. User Conduct</h2>
            <p>You agree not to use the service to post unlawful, harmful, or abusive content. We reserve the right to suspend or remove content that violates these Terms.</p>


            <h2>4. Payments & Refunds</h2>
            <p>Payment terms, pricing, and refund rules will be described on the relevant product or booking pages. All transactions are subject to our payment provider's terms.</p>


            <h2>5. Intellectual Property</h2>
            <p>All website content, branding, logos, and materials are protected by intellectual property laws. You may not reproduce content without permission.</p>


            <h2>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, our company is not liable for indirect, incidental, special, or consequential damages arising out of your use of the website.</p>


            <h2>7. Termination</h2>
            <p>We may suspend or terminate access to the service if you violate these terms or for operational reasons.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsConditions;
