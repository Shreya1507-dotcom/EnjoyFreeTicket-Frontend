import React from 'react'

import { Link } from 'react-router-dom';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import AboutRightImg from '../assests/images/aboutRight.png';
import AboutLeftImg from '../assests/images/aboutLeft.png';
import aboutPicture from '../assests/images/aboutPicture.png';

import '../assests/css/home.css';
import '../assests/css/aboutUs.css';
const AboutUs = () => {
  return (
    <div>
      <Header/>
      <div className='aboutSection'>
        <h3>About Us</h3>
        <p>This is an initiative to support movies which are hidden in todays world of extreme promotion so that cinema goers can have Diverse experiences And movie makers can visualise and manifest the world of their dream through cinematic experiences. Making donations for movie (or entertainment) simple, transparent, and impactful.</p>
      </div>
      <div className='aboutContent'>
        <div className='container-fluid'>
          <div className='aboutFirstSec'>
            <div className='aboutFirstContent'>
              <Link to="">About Us</Link>
              <h3>Creating cinematic experiences through your support</h3>
              <p>Your contribution helps independent filmmakers bring powerful stories to the screen. Together, we make cinema more accessible, diverse, and impactful.</p>
            </div>
            <div className='aboutFirstImg'>
              <img src={AboutRightImg} alt="About Right" className="img-fluid" />
            </div>
          </div>

          <div className='aboutSecSec'>
            <div className='aboutSecImg'>
              <img src={AboutLeftImg} alt="About Right" className="img-fluid" />
            </div>
            <div>
              <div className='aboutSecSuport '>
                <div className='aboutSubbortFirst firstAboutSecSupport'>
                  <img className='img-fluid' src={aboutPicture}/>
                  <h5>Support Independent Films</h5>
                  <p>Empower creators, bring unique stories to life.</p>
                </div>

                <div className='aboutSubbortFirst secAboutSecSupport'>
                  <img className='img-fluid' src={aboutPicture}/>
                  <h5>Support Independent Films</h5>
                  <p>Empower creators, bring unique stories to life.</p>
                </div>
              </div>

              <div className='aboutSecSuport '>
                <div className='aboutSubbortFirst thirdAboutSecSupport'>
                  <img className='img-fluid' src={aboutPicture}/>
                  <h5>Support Independent Films</h5>
                  <p>Empower creators, bring unique stories to life.</p>
                </div>

                <div className='aboutSubbortFirst fourthAboutSecSupport'>
                  <img className='img-fluid' src={aboutPicture}/>
                  <h5>Support Independent Films</h5>
                  <p>Empower creators, bring unique stories to life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
