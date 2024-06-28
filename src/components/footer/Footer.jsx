import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          Copyright &copy; {new Date().getFullYear()} Rock Solid Remedies
        </p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to="/home" className="footer__nav-link" id="AllRightsReservedNavLink">
                All Rights Reserved 
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/home" className="footer__nav-link" id="TermAndConditionsNavLink">
                Terms and Conditions 
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/home" className="footer__nav-link" id="PrivacyPolicyNavLink">
                Privacy Policy 
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;