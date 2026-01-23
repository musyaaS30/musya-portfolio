const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'bi-twitter-x', url: '#' },
    { icon: 'bi-facebook', url: '#' },
    { icon: 'bi-instagram', url: '#' },
    { icon: 'bi-linkedin', url: '#' }
  ];

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Musyahadat</strong> <span>All Rights Reserved</span>
          </p>
        </div>
        
        <div className="social-links d-flex justify-content-center">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;