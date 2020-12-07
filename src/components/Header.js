import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";


const Header = () => {

 


  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link to="/" className="logo">
              <img className="logo__img" src={logo} alt="logo" />
            </Link>

            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <Link className="menu__list-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__list-link" to="/news">
                    News
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__list-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__list-link" to="/analysis">
                    Analysis
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="user-nav">
              <Link  className="user-nav__link" to="/sign-in">
                Sign in
              </Link>
              <Link  className="user-nav__link" to="/sign-up">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
