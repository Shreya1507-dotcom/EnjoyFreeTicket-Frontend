import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/headder.css';
import '../assests/css/style.css';
import '../assests/css/help&support.css';
import { getPagesData } from '../api';

const HelpSupport = () => {
  const [pages, setPages] = useState(null);
  const location = useLocation();

  useEffect(() => {
    pagesData();
  }, []);

 

  const pagesData = async () => {
    try {
      const response = await getPagesData();
      setPages(response.data.data);
    } catch (err) {
      console.error("Something Went Wrong", err);
    }
  };

  // Determine which content to display based on URL
  const getContentByPath = () => {
    if (!pages) return "";

    if (location.pathname === "/terms-and-conditions") {
      return pages.termsAndConditions?.content;
    } else if (location.pathname === "/privacy-policy") {
      return pages.privacyAndPolicy?.content;
    } else if (location.pathname === "/help-and-support") {
      // Help and Support might have static or dynamic data
      return `
        <h4>Help & Support</h4>
        <p>Email: ${pages.helpAndSupport?.supportEmail || 'N/A'}</p>
        <p>Mobile: ${pages.helpAndSupport?.supportMobile || 'N/A'}</p>
      `;
    } else if (location.pathname === "/about-us") {
      return pages.aboutUs?.content;
    }

    return "<p>Page not found</p>";
  };

 

  return (
    <div className="container">
      <Header />

      <div className="page-content my-4">
        {/* Safely rendering HTML content from API */}
        <div
          className="content-section"
          dangerouslySetInnerHTML={{ __html: getContentByPath() }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default HelpSupport;
