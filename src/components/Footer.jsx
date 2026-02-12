const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'bi-facebook', url: 'https://www.facebook.com/share/1KtsbCGuYP/' },
    { icon: 'bi-instagram', url: 'https://www.instagram.com/musyaa_3?igsh=MXFkMHh2empvbzRnbA==' },
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/musyahadat-safitrah-545989343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
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