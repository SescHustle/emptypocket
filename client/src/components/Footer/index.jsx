import React from 'react';
import styles from './Footer.module.scss';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/logo.png';

function Footer () {
    return (
      <footer className="footer" id="footer">
    <div className="footer__row">
        <div className="footer__copyright">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Cum, explicabo
                quia recusandae provident dignissimos eum voluptatem, quae in cumque illo necessitatibus sint.
                Corporis.</p>
        </div>
        <nav className="footer__nav footer-nav">
            <ul className="footer-nav">
                <li className="footer-nav__item">
                    <a className="footer-nav__link" href="index.html">Homepage</a>
                </li>
                <li className="footer-nav__item">
                    <a className="footer-nav__link" href="#">Profile</a>
                </li>
                <li className="footer-nav__item">
                    <a className="footer-nav__link" href="mailto:pavel.lovkiy@gmail.com">Contacts</a>
                </li>
                <li className="footer-nav__item">
                    <a className="footer-nav__link" href="#">License</a>
                </li>
            </ul>
        </nav>
        <ul className="footer__social social">
            <li className="social__item">
                <a href="#" className="social__link">
                    <img src="assets/images/logo.png" alt="Logo" className="social__logo" />
                </a>
            </li>
            <li className="social__item">
                <a href="#" className="social__link">
                    <img src="assets/images/logo.png" alt="Logo" className="social__logo" />
                </a>
            </li>
            <li className="social__item">
                <a href="#" className="social__link">
                    <img src="assets/images/logo.png" alt="Logo" className="social__logo" />
                </a>
            </li>
        </ul>
    </div>
</footer>
  );
};

export default Footer;