const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: 'bi-instagram', url: 'https://www.instagram.com/musyaa_3?igsh=MXFkMHh2empvbzRnbA==' },
    { name: 'Facebook', icon: 'bi-facebook', url: 'https://www.facebook.com/share/1KtsbCGuYP/' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/musyahadat-545989343' },
    { name: 'GitHub', icon: 'bi-github', url: 'https://github.com/musyaaS30' }
  ];

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>{currentYear}</span> <strong className="px-1 sitename">Musyahadat</strong> <span>All Rights Reserved</span>
          </p>
        </div>
        
        <div className="social-links d-flex justify-content-center">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;