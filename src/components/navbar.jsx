import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/authContext';

function Navbar() {
  const { currentUser, logout, basename } = useContext(AuthContext);
  
  return (
    <header className="">
      <div className="navbar">
        <button className="navbar-menu-btn">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <a href="#" className="navbar-brand">
          <span className="first">Film</span>
          <span className="second">Gecesi</span>
        </a>

        <nav className="">
          <ul className="navbar-nav">
            <li>
              <a className="navbar-link" href="">
                Anasayfa
              </a>
            </li>
            <li>
              <a className="navbar-link" href="">
                Filmler
              </a>
            </li>
            <li>
              <a className="navbar-link" href="">
                Diziler
              </a>
            </li>
            <li>
              <a className="navbar-link indicator" href="">
                Tavsiler
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <form action="" className="navbar-form">
            <input
              type="text"
              name="ara"
              placeholder="Film Ara..."
              className="navbar-form-search"
            />
            <button className="navbar-form-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <button className="navbar-form-close">
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>
          </form>

          <button className="navbar-search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <a href="#" className="navbar-signin">

          <span>{currentUser?.name}</span>
          {currentUser ? (
            <span className="logout" onClick={logout}>
              Cikis Yap
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
          ) : (
            <Link className="link" to="/giris-yap">
              Giris Yap
              <ion-icon name="log-in-outline"></ion-icon>
            </Link>
          )}
           
            
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
