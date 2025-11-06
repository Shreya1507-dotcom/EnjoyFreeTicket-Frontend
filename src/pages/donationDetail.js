import React, { useState } from 'react';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/aboutUs.css';
import SelectImg from '../assests/images/selectImg.png';
import { UserDonation } from '../api';

const Donation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    amount: '',
    panCard: '',
    movie: '',
    suggest: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    switch(name) {
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
      case 'amount':
        if (!value.trim()) error = 'Donation Amount is required';
        else if (!/^\d+$/.test(value) || Number(value) <= 0) error = 'Enter a valid amount';
        break;
      case 'panCard':
        if (!value.trim()) error = 'Pan Card is required';
        else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(value)) error = 'Invalid Pan Card format';
        break;
      case 'suggest':
        if (value && !/^[A-Za-z0-9 ]{1,50}$/.test(value)) error = 'Only alphanumeric characters allowed';
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

    const hasErrors = Object.values(errors).some(err => err);
    if (hasErrors) {
      console.log('hasErrors',hasErrors)
      alert('Please fix the errors before submitting!');
      return;
    }

    SubmitDonationData();
  };

  const SubmitDonationData = async () =>{
    try{
      const NewformData = new FormData();
      NewformData.append('fullName', formData.fullName);
      NewformData.append('email', formData.email);
      NewformData.append('mobile', formData.mobile);
      NewformData.append('amount', formData.amount);
      NewformData.append('panCard', formData.panCard);
      NewformData.append('suggest', formData.suggest);
      NewformData.append('selectedMovies', formData.selectedMovies);

      const donationSubmit = await UserDonation(NewformData);

    }catch(err){
      console.log("err",err)
    }
  }



  return (
    <div>
      <Header/>
      <div className='aboutSection donationDetail'>
        <h3>Donation Details</h3>
        <p>See how your donation makes a difference</p>
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
                    placeholder='Full Name'
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                </div>

                <div className='form-group'>
                  <label>Email</label>
                  <input
                    className='form-control'
                    type="text"
                    placeholder='Email'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className='form-group'>
                  <label>Mobile Number</label>
                  <input
                    className='form-control'
                    type="text"
                    placeholder='Mobile Number'
                    name="mobile"
                    value={formData.mobile}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only digits and max 10
                      if (/^\d{0,10}$/.test(value)) {
                        setFormData({ ...formData, mobile: value });
                        validateField('mobile', value);
                      }
                    }}
                  />

                  {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                </div>

                <div className='form-group'>
                  <label>Donation Amount</label>
                  <input
                    className='form-control'
                    type="text"
                    placeholder='Enter Donation Amount'
                    name="amount"
                    value={formData.amount}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only positive numbers
                      if (/^\d*$/.test(value)) {
                        setFormData({ ...formData, amount: value });
                        validateField('amount', value);
                      }
                    }}
                  />
                  {errors.amount && <small className="text-danger">{errors.amount}</small>}
                </div>

                <div className='form-group'>
                  <label>Pan Card</label>
                  <input
                    className='form-control'
                    type="text"
                    placeholder='Enter Pan Card'
                    name="panCard"
                    value={formData.panCard}
                    onChange={handleChange}
                  />
                  {errors.panCard && <small className="text-danger">{errors.panCard}</small>}
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
                  <label>Can't find the movie that you are looking for? Suggest here</label>
                  <input
                    className='form-control'
                    type="text"
                    placeholder='Suggest Here'
                    name="suggest"
                    value={formData.suggest}
                    onChange={handleChange}
                  />
                  {errors.suggest && <small className="text-danger">{errors.suggest}</small>}
                </div>

                <input
                  className='form-control w-75 m-auto donateSubmitBtn'
                  value="Donate Now"
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

export default Donation;
