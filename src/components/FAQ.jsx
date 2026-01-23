import { useState } from 'react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqData = [
    {
      id: 1,
      number: '01',
      question: 'Apakah kamu bisa membuat website dari nol?',
      answer: 'Ya! Saya bisa membangun website dari perencanaan UI/UX, pembuatan frontend, hingga backend lengkap dengan database serta hosting.'
    },
    {
      id: 2,
      number: '02',
      question: 'Teknologi apa saja yang kamu gunakan?',
      answer: 'Saya menggunakan HTML, CSS, JavaScript, Tailwind, React, Node.js, MySQL, serta API modern sesuai kebutuhan proyek.'
    },
    {
      id: 3,
      number: '03',
      question: 'Apakah websitenya responsif untuk semua perangkat?',
      answer: 'Semua website yang saya buat sudah responsif agar tampil optimal di smartphone, tablet, maupun desktop.'
    },
    {
      id: 4,
      number: '04',
      question: 'Apakah kamu bisa menambahkan fitur khusus?',
      answer: 'Tentu! Mulai dari sistem login, pembayaran, dashboard admin, photobooth camera, hingga API integrasi — saya bisa bantu buatkan.'
    },
    {
      id: 5,
      number: '05',
      question: 'Bagaimana proses kerja untuk proyek website?',
      answer: 'Mulai dari diskusi kebutuhan, pembuatan desain, pengembangan, revisi, hingga publikasi ke domain hosting — semuanya saya bantu.'
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