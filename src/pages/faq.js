import React, { useState } from 'react';
import Header from '../components/userHeader';
import Footer from '../components/userFooter';
import '../assests/css/home.css';
import '../assests/css/headder.css';
import '../assests/css/style.css';
import '../assests/css/help&support.css';

const Faq = () => {
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'general', label: 'General' },
    { key: 'technical', label: 'Technical' },
    { key: 'other', label: 'Other' },
  ];

  const faqs = [
    {
      category: 'general',
      question: 'How to change my company name?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id orci eros...',
    },
    {
      category: 'technical',
      question: 'How to fix login issues?',
      answer:
        'If you are facing login issues, try resetting your password or clearing cache...',
    },
    {
      category: 'other',
      question: 'How do I contact support?',
      answer:
        'You can reach out via phone, email, or WhatsApp—we’re happy to assist!',
    },
    {
      category: 'general',
      question: 'How to edit my profile?',
      answer:
        'Navigate to your profile settings and click Edit Details to update your info.',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="container">
      <Header />
      <div className="container-fluid">
        <div className="helpBanner text-center position-relative">
          <h3>Hello, how can we help?</h3>
          <div className="position-relative">
            <input
              className="form-control searchInput"
              type="text"
              placeholder="Search"
            />
            <i className="fa-solid fa-magnifying-glass searchHelp"></i>
          </div>
          <p>or choose a category to quickly find the help you need</p>

          <div className="helpContact">
            <div className="container">
              <div className="row">
                {[
                  {
                    icon: 'fa-solid fa-phone',
                    title: '+91 123 456 7890',
                    desc: 'We are always happy to help',
                  },
                  {
                    icon: 'fa-regular fa-envelope',
                    title: 'help@bookstudio.com',
                    desc: 'Best way to get a quick answer',
                  },
                  {
                    icon: 'fa-brands fa-whatsapp',
                    title: 'WhatsApp Us',
                    desc: 'We are always happy to help',
                  },
                ].map((c, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="contentHelpTitle">
                      <i className={c.icon}></i>
                      <div>
                        <h3>{c.title}</h3>
                        <p>{c.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-fluid mt-5">
        <div className="row">
          <aside className="col-md-3">
            <h2 className="helpFaq">FAQ Categories</h2>
            <ul className="nav nav-pills flex-column">
              {categories.map((cat) => (
                <li className="nav-item" key={cat.key}>
                  <button
                    className={`nav-link ${
                      activeCategory === cat.key ? 'active' : ''
                    }`}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setOpenIndex(null);
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="col-md-9">
            <h2 className="helpFaq">{categories.find(c => c.key === activeCategory).label}</h2>

            <div className="accordion" id="faqAccordion">
              {filteredFaqs.map((faq, idx) => {
                const open = idx === openIndex;
                return (
                  <div className="accordion-item" key={idx}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          open ? '' : 'collapsed'
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${open ? 'show' : ''}`}
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                );
              })}
              {filteredFaqs.length === 0 && (
                <p>No FAQs available in this category.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container-fluid mt-5">
        <div className="helpWriteContent text-center">
          <div className="helpMessage">
            <h3>
              Do you still need help? Don’t worry – write to us and we’ll help
              you.
            </h3>
          </div>
          <div className="writeSection">
            <form>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  placeholder="Write here..."
                ></textarea>
              </div>
              <button className="helpSubmitBtn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
