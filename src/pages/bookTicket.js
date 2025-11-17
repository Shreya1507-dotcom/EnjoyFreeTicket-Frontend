import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/aboutUs.css';
import SelectImg from '../assests/images/selectImg.png';

const BookTicket = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    tickets: '',
    city: '',
    timing: '',
    cinema: '',
    movie: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  // ✅ Common Validation Function
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value.trim()) error = 'Full Name is required';
        else if (!/^[A-Za-z ]{3,50}$/.test(value)) error = 'Full Name must be 3–50 alphabets';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
        break;
      case 'mobile':
        if (!value.trim()) error = 'Mobile Number is required';
        else if (!/^\d{10}$/.test(value)) error = 'Mobile must be 10 digits';
        break;
      case 'tickets':
        if (!value) error = 'Please enter number of tickets';
        else if (isNaN(value) || value <= 0) error = 'Tickets must be a valid number';
        break;
      case 'city':
        if (!value.trim()) error = 'City Name is required';
        break;
      case 'timing':
        if (!value.trim()) error = 'Movie Timing is required';
        break;
      case 'cinema':
        if (!value.trim()) error = 'Cinema Name is required';
        break;
      case 'agreeTerms':
        if (!value) error = 'You must agree to the terms';
        break;
      default:
        break;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  // ✅ On Change Handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = type === 'checkbox' ? checked : value;

    // Restrictions
    if (name === 'mobile' && !/^\d{0,10}$/.test(newValue)) return;
    if (name === 'fullName' && newValue && !/^[A-Za-z ]*$/.test(newValue)) return;

    setFormData(prev => ({ ...prev, [name]: newValue }));

    // Validate as user types or toggles
    validateField(name, newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Step 1: Create a temporary error object
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      let value = formData[key];
      let error = '';

      switch (key) {
        case 'fullName':
          if (!value.trim()) error = 'Full Name is required';
          else if (!/^[A-Za-z ]{3,50}$/.test(value))
            error = 'Full Name must be 3-50 alphabets';
          break;
        case 'email':
          if (!value.trim()) error = 'Email is required';
          else if (!/^\S+@\S+\.\S+$/.test(value))
            error = 'Invalid email format';
          break;
        case 'mobile':
          if (!value.trim()) error = 'Mobile Number is required';
          else if (!/^\d{10}$/.test(value))
            error = 'Mobile must be 10 digits';
          break;
        case 'tickets':
          if (!value) error = 'Please select number of tickets';
          break;
        case 'city':
          if (!value.trim()) error = 'City Name is required';
          break;
        case 'timing':
          if (!value.trim()) error = 'Movie Timing is required';
          break;
        case 'cinema':
          if (!value.trim()) error = 'Cinema Name is required';
          break;
        case 'agreeTerms':
          if (!value) error = 'You must agree to the terms';
          break;
        default:
          break;
      }

      if (error) newErrors[key] = error;
    });

    // Step 2: Update errors state once after all checks
    setErrors(newErrors);

    // Step 3: If there are errors, stop submission
    if (Object.keys(newErrors).length > 0) {
      alert('Please fix the highlighted errors.');
      return;
    }

    // Step 4: If no errors, submit the form
    console.log('Form Submitted', formData);
    alert('Tickets booked successfully!');
  };


  return (
    <div>
      <Header/>
      <div className='aboutSection bookTicket'>
        <h3>Book Tickets</h3>
        <p>Book now and enjoy the show</p>
      </div>

      <div className='donationBg'>
        <div className="row m-0">
          <div className="col-md-6 offset-3">
            <div className='donationSection'>
              <form onSubmit={handleSubmit}>
                
                {/* Full Name */}
                <div className='form-group'>
                  <label>Full Name</label>
                  <input
                    className='form-control'
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                  {errors.fullName && <small className='text-danger'>{errors.fullName}</small>}
                </div>

                {/* Email */}
                <div className='form-group'>
                  <label>Email</label>
                  <input
                    className='form-control'
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && <small className='text-danger'>{errors.email}</small>}
                </div>

                {/* Mobile */}
                <div className='form-group'>
                  <label>Mobile Number</label>
                  <input
                    className='form-control'
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                  />
                  {errors.mobile && <small className='text-danger'>{errors.mobile}</small>}
                </div>

                {/* Tickets */}
                <div className='form-group'>
                  <label>Number of Tickets</label>
                  <input
                    className='form-control'
                    type="number"
                    name="tickets"
                    value={formData.tickets}
                    onChange={handleChange}
                    placeholder="Enter ticket count"
                  />
                  {errors.tickets && <small className='text-danger'>{errors.tickets}</small>}
                </div>

                {/* City */}
                <div className='form-group'>
                  <label>City Name</label>
                  <input
                    className='form-control'
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter City Name"
                  />
                  {errors.city && <small className='text-danger'>{errors.city}</small>}
                </div>

                {/* Timing */}
                <div className='form-group'>
                  <label>Movie Timing</label>
                  <input
                    className='form-control'
                    type="datetime-local"
                    name="timing"
                    value={formData.timing}
                    onChange={handleChange}
                  />
                  {errors.timing && <small className='text-danger'>{errors.timing}</small>}
                </div>

                {/* Cinema */}
                <div className='form-group'>
                  <label>Cinema Name</label>
                  <input
                    className='form-control'
                    type="text"
                    name="cinema"
                    value={formData.cinema}
                    onChange={handleChange}
                    placeholder="Enter Cinema Name"
                  />
                  {errors.cinema && <small className='text-danger'>{errors.cinema}</small>}
                </div>

                {/* Select Movie */}
                <div className='form-group'>
                  <label>Select Movie</label>
                  <div className='d-flex gap-2 selectAutoLenth'>
                    {[...Array(6)].map((_, idx) => (
                      <img
                        key={idx}
                        src={SelectImg}
                        className={`img-fluid selectImg ${formData.movie === idx ? 'activeSelect' : ''}`}
                        alt="SelectImg"
                        onClick={() => setFormData({...formData, movie: idx})}
                        style={{cursor: 'pointer'}}
                      />
                    ))}
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className='form-group'>
                  <span className='ticketTerms'>
                    <input
                      type='checkbox'
                      name='agreeTerms'
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                    />{' '}
                    I agree with the booking Tickets <Link to="/">Terms</Link>
                  </span>
                  {errors.agreeTerms && <small className='text-danger d-block agreeError'>{errors.agreeTerms}</small>}
                </div>

                <input
                  className='form-control w-75 m-auto donateSubmitBtn'
                  value="Book Now"
                  type='submit'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookTicket;
