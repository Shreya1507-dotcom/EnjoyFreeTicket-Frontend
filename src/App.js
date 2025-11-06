import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/pages/index';
import AboutUs from './pages/aboutUs';
import ContactUsNew from './pages/contactUsNew';
import Repots from './pages/report';
import LoginUs from './pages/login';
import DetailUs from './pages/donationDetail';
import BookTicket from './pages/bookTicket';
import EditProfileForm from './pages/editProfile';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/privacyPolicy';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Signup from './pages/register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUsNew />} />
        <Route path="report-us" element={<Repots />} />
        <Route path='/login' element={<LoginUs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="detail-us" element={<DetailUs/>} />
        <Route path="bookTicket-us" element={<BookTicket/>} />
        <Route path="editProfile" element={<EditProfileForm/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="terms-and-condition" element={<TermsConditions/>} />

      </Routes>
    </Router>
  );
}

export default App;