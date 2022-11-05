import React from 'react';
import logo from '../../assets/logo.png'

function Header () {
  return (
    <header className="header" id="header">
    <nav className="navbar navbar-expand-md navbar-dark bg-primary header-nav">
        <div className="container-fluid header__row">
            <a className="header-nav__logo" href="#">
                <img src={logo} alt="App Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav header-nav__links">
                    <li className="nav-item header-nav__link">
                        <a href="index.html">Overview</a>
                    </li>
                    <li className="nav-item header-nav__link ml-0">
                        <a href="expenses.html">Expenses</a>
                    </li>
                    <li className="nav-item header-nav__link">
                        <a href="#">Reports</a>
                    </li>
                    <li className="nav-item header-nav__link">
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