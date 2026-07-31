import { useState } from 'react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqData = [
    {
      id: 1,
      number: '01',
      question: 'Can you build a website from scratch?',
      answer: 'Yes! I can build a website from UI/UX planning, frontend development, to a complete backend with database and hosting.'
    },
    {
      id: 2,
      number: '02',
      question: 'What technologies do you use?',
      answer: 'I use HTML, CSS, JavaScript, Tailwind, React, Node.js, MySQL, and modern APIs as needed for the project.'
    },
    {
      id: 3,
      number: '03',
      question: 'Is the website responsive for all devices?',
      answer: 'All websites I create are responsive to display optimally on smartphones, tablets, and desktops.'
    },
    {
      id: 4,
      number: '04',
      question: 'Can you add custom features?',
      answer: 'Of course! From login systems, payments, admin dashboards, photobooth camera, to API integration — I can help build them.'
    },
    {
      id: 5,
      number: '05',
      question: 'How does the workflow for a website project work?',
      answer: 'Starting from requirements discussion, design creation, development, revisions, to publishing on hosting domain — I help with everything.'
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="faq-wrapper">
              {faqData.map((faq, index) => (
                <div 
                  key={faq.id}
                  className={`faq-item ${activeFaq === index ? 'faq-active' : ''}`}
                >
                  <div 
                    className="faq-header"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-number">{faq.number}</span>
                    <h4>{faq.question}</h4>
                    <div className="faq-toggle">
                      <i className={`bi ${activeFaq === index ? 'bi-dash' : 'bi-plus'}`}></i>
                    </div>
                  </div>
                  
                  <div className={`faq-content ${activeFaq === index ? 'active' : ''}`}>
                    <div className="content-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;