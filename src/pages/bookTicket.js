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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
      validateField(name, checked);
    } else {
      // Control Mobile input (digits only)
      if (name === 'mobile' && !/^\d{0,10}$/.test(value)) return;

      // Control Full Name (alphabets and spaces only)
      if (name === 'fullName' && value && !/^[A-Za-z ]*$/.test(value)) return;

      setFormData({ ...formData, [name]: value });
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value.trim()) error = 'Full Name is required';
        else if (!/^[A-Za-z ]{3,50}$/.test(value)) error = 'Full Name must be 3-50 alphabets';
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

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach(key => validateField(key, formData[key]));

    const hasErrors = Object.values(errors).some(err => err) || Object.values(formData).some(val => val === '' || val === false);
    if (hasErrors) {
      alert('Please fix the errors before submitting!');
      return;
    }

    console.log('Form Submitted', formData);
    alert('Tickets booked successfully!');
    // Call API here
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
                <div className='form-group'>
                  <label>Full Name</label>
                  <input
                    className='form-control'
                    type="text"
                    name="fullName"
                    placeholder='Full Name'
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <small className='text-danger'>{errors.fullName}</small>}
                </div>

                <div className='form-group'>
                  <label>Email</label>
                  <input
                    className='form-control'
                    type="text"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className='text-danger'>{errors.email}</small>}
                </div>

                <div className='form-group'>
                  <label>Mobile Number</label>
                  <input
                    className='form-control'
                    type="text"
                    name="mobile"
                    placeholder='Mobile Number'
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {errors.mobile && <small className='text-danger'>{errors.mobile}</small>}
                </div>

                <div className='form-group'>
                  <label>Number of Tickets</label>
                  <input
                    className='form-control'
                    name="tickets"
                    value={formData.tickets}
                    onChange={handleChange}
                  />
                    
                  {errors.tickets && <small className='text-danger'>{errors.tickets}</small>}
                </div>

                <div className='form-group'>
                  <label>City Name</label>
                  <input
                    className='form-control'
                    type="text"
                    name="city"
                    placeholder='Enter City Name'
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <small className='text-danger'>{errors.city}</small>}
                </div>

                <div className='form-group'>
                  <label>Movie Timing</label>
                  <input
                    className='form-control'
                    type="text"
                    name="timing"
                    placeholder='Enter Movie Timing'
                    value={formData.timing}
                    onChange={handleChange}
                  />
                  {errors.timing && <small className='text-danger'>{errors.timing}</small>}
                </div>

                <div className='form-group'>
                  <label>Cinema Name</label>
                  <input
                    className='form-control'
                    type="text"
                    name="cinema"
                    placeholder='Enter Cinema Name'
                    value={formData.cinema}
                    onChange={handleChange}
                  />
                  {errors.cinema && <small className='text-danger'>{errors.cinema}</small>}
                </div>

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

                <div className='form-group'>
                  <span className='ticketTerms'>
                    <input
                      type='checkbox'
                      name='agreeTerms'
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                    />
                    I agree with the booking Tickets <Link to="/">Terms</Link>
                  </span>
                  {errors.agreeTerms && <small className='text-danger d-block'>{errors.agreeTerms}</small>}
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
  )
}

export default BookTicket;
