import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: '',
    success: false
  });

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      label: 'Address',
      details: '892 Park Avenue, Manhattan<br>New York, NY 10075',
      delay: 350
    },
    {
      icon: 'bi-envelope',
      label: 'Email',
      details: 'hello@businessdemo.com',
      delay: 400
    },
    {
      icon: 'bi-telephone',
      label: 'Phone',
      details: '+1 (555) 789-2468',
      delay: 450
    },
    {
      icon: 'bi-clock',
      label: 'Hours',
      details: 'Monday - Friday: 9AM - 6PM<br>Saturday: 10AM - 4PM',
      delay: 500
    }
  ];

  const socialLinks = [
    { icon: 'bi-linkedin', url: '#' },
    { icon: 'bi-twitter-x', url: '#' },
    { icon: 'bi-instagram', url: '#' },
    { icon: 'bi-facebook', url: '#' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, error: '', success: false });

    // Simulate form submission
    try {
      // Replace this with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({ loading: false, error: '', success: true });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ loading: false, error: 'Failed to send message. Please try again.', success: false });
    }
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-stretch">
          {/* Contact Form */}
          <div className="col-lg-7 order-lg-1 order-2" data-aos="fade-right" data-aos-delay="200">
            <div className="contact-form-container">
              <div className="form-intro">
                <h2>Let's Start a Conversation</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-field">
                      <input 
                        type="text" 
                        name="name" 
                        className="form-input" 
                        id="userName" 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                      <label htmlFor="userName" className="field-label">Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-field">
                      <input 
                        type="email" 
                        className="form-input" 
                        name="email" 
                        id="userEmail" 
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                      <label htmlFor="userEmail" className="field-label">Email</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-field">
                      <input 
                        type="tel" 
                        className="form-input" 
                        name="phone" 
                        id="userPhone" 
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="userPhone" className="field-label">Phone</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-field">
                      <input 
                        type="text" 
                        className="form-input" 
                        name="subject" 
                        id="messageSubject" 
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required 
                      />
                      <label htmlFor="messageSubject" className="field-label">Subject</label>
                    </div>
                  </div>
                </div>

                <div className="form-field message-field">
                  <textarea 
                    className="form-input message-input" 
                    name="message" 
                    id="userMessage" 
                    rows="5"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                  ></textarea>
                  <label htmlFor="userMessage" className="field-label">Message</label>
                </div>

                <div className="my-3">
                  {formStatus.loading && <div className="loading">Loading</div>}
                  {formStatus.error && <div className="error-message">{formStatus.error}</div>}
                  {formStatus.success && <div className="sent-message">Your message has been sent. Thank you!</div>}
                </div>

                <button 
                  type="submit" 
                  className="send-button"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? 'Sending...' : 'Send Message'}
                  <span className="button-arrow">→</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="col-lg-5 order-lg-2 order-1" data-aos="fade-left" data-aos-delay="300">
            <div className="contact-sidebar">
              <div className="contact-header">
                <h3>Get in Touch</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.</p>
              </div>

              <div className="contact-methods">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="contact-method" data-aos="fade-in" data-aos-delay={contact.delay}>
                    <div className="contact-icon">
                      <i className={`bi ${contact.icon}`}></i>
                    </div>
                    <div className="contact-details">
                      <span className="method-label">{contact.label}</span>
                      <p dangerouslySetInnerHTML={{ __html: contact.details }}></p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="connect-section" data-aos="fade-up" data-aos-delay="550">
                <span className="connect-label">Connect with us</span>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.url} className="social-link">
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;