import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/skipper-black.png';
import whatsappIcon from '../assets/whatsapp-icon.png';
import './Footer.css';

const Footer = () => { 
  const location = useLocation();
  const path = location.pathname;

  const scrollToForm = () => {
    const isMobile = window.innerWidth <= 480;
    const formElement = isMobile 
      ? document.querySelector('.mobile-only .startup-form')
      : document.querySelector('.desktop-only .startup-form');

    if (formElement) {
      const offset = 80;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // List of paths where the action bar should be shown
  const showActionBarPaths = [
    '/drone-engineering',
    '/robot-engineering',
    '/ar-vr',
    '/startup-stack',
    '/core-tech',
    '/creators-hub'
  ];

  const shouldShowActionBar = showActionBarPaths.includes(path);

  // Set course name based on current path
  const getCourseNameFromPath = () => {
    switch(path) {
      case '/drone-engineering':
        return 'Drone Engineering Program';
      case '/robot-engineering':
        return 'Robot Engineering Program';
      case '/ar-vr':
        return 'AR/VR Program';
      case '/startup-stack':
        return 'Startup Stack Program';
      case '/core-tech':
        return 'Core Tech Program';
      case '/creators-hub':
        return 'Creators Hub Program';
      default:
        return '';
    }
  };

  const courseName = getCourseNameFromPath();

  return (
    <>
      <footer className="footer">
        {shouldShowActionBar && (
          <div className="footer-actionbar">
            <div className="footer-actionbar-inner">
              <div className="actionbar-left">
                <span className="footer-program-title">{courseName}</span>
              </div>
              <div className="actionbar-right">
                <a href={`https://wa.me/916366953507?text=Hi SkipperX Team, I came across your ${courseName} 
I am really interested in this program and would like to know more details about it.
Please let me know if enrollment is currently open.
Thank you!`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                  <span className="whatsapp-icon">
                    <img src={whatsappIcon} alt="WhatsApp" />
                  </span>
                  <span className="whatsapp-text">
                    <span className="desktop-only">Interested</span>
                    <span className="mobile-only">Connect with an Expert</span>
                  </span>
                </a>
                                <button className="apply-btn" onClick={() => {
                  const isMobile = window.innerWidth <= 480;
                  
                  // Find the start learning button and click it
                  const startLearningBtn = document.querySelector('.startup-pricing-btn') || 
                                         document.querySelector('.drone-pricing-btn');
                  if (startLearningBtn) {
                    startLearningBtn.click();
                  }

                  // Then scroll to the form
                  setTimeout(() => {
                    let formElement;
                    if (isMobile) {
                      formElement = document.querySelector('.mobile-only');
                    } else {
                      formElement = document.querySelector('.desktop-only');
                    }

                    if (formElement) {
                      const headerOffset = 80;
                      const elementPosition = formElement.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }, 100); // Small delay to ensure the form is shown
                }}>Apply now</button>
              </div>
            </div>
          </div>
        )}
        <div className="footer-social">
          <span>Catch our updates on</span>
          <a href="https://www.linkedin.com/company/107873830/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        <div className="footer-content">
          <div className="footer-left">
            <a href='/'><img src={logo} alt="Skipper Logo" className="footer-logo" /></a>
            <p>SkipperX is a premium online learning platform serving graduates, senior professionals in business, tech, and
              design, and anyone looking to upgrade their job profile.</p>

            <p>Our job-focused, skill-based programs are built around real-world projects
              and guided by mentors from top companies like Meta, Google, and JPMorgan.</p>

            <p>Learn drone engineering, AI, robotics, AR/VR, YouTube, stock trading, and more — all inside virtual classrooms. Explore curated learning packs like
              Tech Core, Startup Stack, and Creative Hub to grow your career or launch your next big move.</p>

            <p><strong>1st floor, 19th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</strong></p>
            <p><a href="mailto:support@skipperx.io">support@skipperx.io</a></p>
            <p><a href="tel:+916366953507">+91 6366953507</a></p>
          </div>

          <div className="footer-sections">
            <div className="footer-column" id="a">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="#">Careers</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="#">Apply as Mentor</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column" id="b">
              <h4>Programs</h4>
              <ul>
                <li><a href="#launch-navigate">For Innovators</a></li>
                <li><a href="#stack-navigate">For Doers</a></li>
                <li><a href="#">For Enterpreneurs</a></li>
              </ul>
            </div>

            <div className="footer-column" id="c">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/t & c">Terms & Condition</Link></li>
              </ul>
            </div>

            <div className="footer-column" id="d">
              <h4>Support</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><Link to="/refund-policy">Payment and <br />Refund Policy</Link></li>
              </ul>
            </div>

            <div className="exclusive">
              <h3>Community Exclusive</h3>
              <p>Subscribe to our newsletter for exclusive updates on the latest releases and special offers.</p>
              <div className="subscribe-wrapper">
                <input type="email" placeholder="Email Id" className="subscribe-input" />
                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <p className="footer-rights">©2025. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;