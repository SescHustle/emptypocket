import React from 'react';
import styles from './Header.module.scss';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/logo.png';

function Footer () {
    return (
      <footer class="footer" id="footer">
    <div class="footer__row">
        <div class="footer__copyright">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio. Cum, explicabo
                quia recusandae provident dignissimos eum voluptatem, quae in cumque illo necessitatibus sint.
                Corporis.</p>
        </div>
        <nav class="footer__nav footer-nav">
            <ul class="footer-nav">
                <li class="footer-nav__item">
                    <a class="footer-nav__link" href="index.html">Homepage</a>
                </li>
                <li class="footer-nav__item">
                    <a class="footer-nav__link" href="#">Profile</a>
                </li>
                <li class="footer-nav__item">
                    <a class="footer-nav__link" href="mailto:pavel.lovkiy@gmail.com">Contacts</a>
                </li>
                <li class="footer-nav__item">
                    <a class="footer-nav__link" href="#">License</a>
                </li>
            </ul>
        </nav>
        <ul class="footer__social social">
            <li class="social__item">
                <a href="#" class="social__link">
                    <img src="assets/images/logo.png" alt="Logo" class="social__logo" />
                </a>
            </li>
            <li class="social__item">
                <a href="#" class="social__link">
                    <img src="assets/images/logo.png" alt="Logo" class="social__logo" />
                </a>
            </li>
            <li class="social__item">
                <a href="#" class="social__link">
                    <img src="assets/images/logo.png" alt="Logo" class="social__logo" />
                </a>
            </li>
        </ul>
    </div>
</footer>
  );
};

export default Footer;