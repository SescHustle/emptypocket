import React from 'react';
import styles from './Header.module.scss';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/logo.png';

function Header () {
  return (
    <header className={styles.header} id={'header'}>
    <nav className={styles.header_nav}>
        <div className={[bootstrap.containerFluid, styles.header__row]}>
            <a className={styles.header_nav__logo} href="#">
                <img src={logo} alt="App Logo" />
            </a>
            <button className={bootstrap.navbarToggler} type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className={bootstrap.navbarTogglerIcon}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav header_nav__links">
                    <li className="nav-item header_nav__link">
                        <a href="index.html">Overview</a>
                    </li>
                    <li className="nav-item header_nav__link ml-0">
                        <a href="expenses.html">Expenses</a>
                    </li>
                    <li className="nav-item header_nav__link">
                        <a href="#">Reports</a>
                    </li>
                    <li className="nav-item header_nav__link">
                        <a href="#">Planning</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
};

export default Header;