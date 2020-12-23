import React , {useState} from 'react';
import {Link, useHistory } from  'react-router-dom'
import News from './News';
import Search from './Search';
import { Avatar } from '@material-ui/core';
import { auth } from "../firebase";
import logo from '../img/logo.png'
import './Profile.css'

const Profile = ({ user }) => {

  const history = useHistory('');

  if (user === false) {
      history.push("/sign-in")
  }
  const logout = (event) => {
    event.preventDefault();
    auth.signOut();
    history.push("/");
}

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
                  <Link className="menu__list-link" to="/profile/news">
                    News
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__list-link" to="/profile/analysis">
                    Analysis
                  </Link>
                </li>
              </ul>
            </nav>

           <div className="user-nav">
              <Link  onClick={logout} className="user-nav__link" >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </header>
              <section>
                    <Avatar className="homeHeader__avatar" alt="" src="" />
                    <h3 className="homeHeader__name">{ user?.displayName}</h3>
                </section>
        </>
    );
};

export default Profile;