import React,{useState,useEffect} from 'react'
import Header from '../components/userHeader';
import Footer from '../components/userFooter';

import '../assests/css/home.css';
import '../assests/css/headder.css';
import '../assests/css/style.css';
import { Link } from 'react-router-dom';
import BannerImg from '../assests/images/banner2nd.png';
import BannerCamera from '../assests/images/cameraBanner.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

import moneyIcon from '../assests/images/monetIcon.png';
import ticketImg from '../assests/images/ticket.png';
import ticketIcon from '../assests/images/ticketIcon.png';
import coinImg from '../assests/images/coin.png';
import chartImg from '../assests/images/chart.png';
import viewIcon from '../assests/images/viewIcon.png';

import '@fortawesome/fontawesome-free/css/all.min.css';



const Index = () => {
  return (
  <div className=''>
  <Header/>
  <div className='banner'>
        <div className='bannerTittle'>
            <div className='linkBanner text-center w-75 m-auto position-relative'>
                <Link>Supporting Independent Cinema</Link>
                <h3>Support Stories That Matter and Keep Cinema Alive</h3>
                <p>Help bring extraordinary stories to life. Support independent filmmakers and preserve cinematic heritage through meaningful donations.</p>
                <img className="img-fluid bannerImg" src={BannerImg} alt="Banner" />
                <img className="img-fluid bannerCamera" src={BannerCamera} alt="Banner" />
            </div>
        </div>
      </div>
  
    <div className='homeContent'>
        <div className='container-fluid'>
           <div className='counterUp'>
              <p className='text-center text-white mb-0'>Trusted by</p>

              <div className='countNumber'>
                <div className='position-relative'>
                  <h2>50k+</h2>
                  <p>Donors</p>
                </div>

                <div className='position-relative'>
                  <h2>200k+</h2>
                  <p>Films Funded</p>
                </div>

                <div className='position-relative'>
                  <h2>350k+</h2>
                  <p>Raised</p>
                </div>

                <div className='position-relative'>
                  <h2>2000+</h2>
                  <p>Free Tickets</p>
                </div>
              </div>
           </div>

           <div className='ticketBooking text-center'>
              <h3 className='ticketTille'>How You Can Make a <span> Difference</span></h3>
              <p className='ticketSubTile'>Choose from multiple ways to support independent cinema and be part of the journey</p>
           </div>

          <div className='ticketSection'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='ticketBox position-relative'>
                  <img className="img-fluid ticketIcon" src={moneyIcon}/>

                  <img className="img-fluid ticketPosition" src={coinImg}/>

                  <h3>Smart Donations</h3>
                  <p>Make secure donations with flexible payment options. Track your impact and see exactly how your contributions help bring films to life.</p>

                  <div className='ticketIconContent'>
                    <p><i className="fa-solid fa-trophy"></i> Complete Transparency</p>
                    <p><i className="fa-solid fa-trophy"></i> Track Impact in Real Time</p>
                    <p><i className="fa-solid fa-user-tie"></i> Verified by Our Community</p>
                  </div>

                  <div className='ticketPageLink'>
                    <Link to="detail-us">Donate Now</Link>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='ticketBox position-relative'>
                  <img className="img-fluid ticketIcon" src={ticketIcon}/>

                  <img className="img-fluid ticketPosition" src={ticketImg}/>

                  <h3>Book Tickets</h3>
                  <p>Get exclusive access to premieres and special screenings. Support filmmakers by attending their debut shows and film festivals.</p>

                  <div className='ticketIconContent'>
                    <p><i className="fa-solid fa-trophy"></i> Authentic & Verified Events</p>
                    <p><i className="fa-solid fa-trophy"></i> Shared Access for All</p>
                    <p><i className="fa-solid fa-user-tie"></i> Transparent Ticketing Process</p>
                  </div>

                  <div className='ticketPageLink'>
                    <Link to="bookTicket-us" style={{backgroundColor:'#2563EB'}}>Book Tickets</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='viewReport'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6'>
                     <div className='ticketBox position-relative'>
                      <img className="img-fluid ticketIcon" src={viewIcon}/>

                      <h3>Impact Reports</h3>
                      <p>Track your contributions and see detailed reports on how your donations are making a difference in the film industry.</p>

                      <div className='ticketIconContent'>
                        <p><i className="fa-solid fa-trophy"></i> Donation Performance Metrics</p>
                        <p><i className="fa-solid fa-trophy"></i> See Your Impact</p>
                        <p><i className="fa-solid fa-user-tie"></i> Full Contribution Details</p>
                      </div>

                      <div className='ticketPageLink'>
                        <Link to="report-us" style={{backgroundColor:'#DE9805'}}>View Reports</Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <img className='img-fluid chatImgHome' src={chartImg} alt="ChartHOme"/>
                  </div>
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

export default Index