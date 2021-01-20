import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Mobile1.png';
import photo1 from './assets/Group 13.png';
import photo2 from './assets/Group 14.png';
import photo3 from './assets/Group 15.png';

const Header = () => {
  return(
    <header className="main">
      <div className="main__top top">
        <div className="top__container">
          <h1 className="top__logo">AppCo</h1>
          <h2 className="top__title"><strong>Brainstorming</strong> for desired perfect Usability</h2>
          <p className="top__text">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          <button type='button' className="top__button button"><Link to='/users' className="top__button-link">View Stats</Link></button>
        </div>
        <div className="top__photo"><img className="top__mobile" src={logo} alt="mobile" /></div>
      </div>
      <div className="main__content">
        <h1 className="main__title">Why <strong>small business owners<br/>love</strong> AppCo?</h1>
        <p className="main__text">Our design projects are fresh and simple and will benefit your business<br/> greatly. Learn more about our work!</p>
        <div className="main__cards card">
          <div className="card__container">
            <img className="card__logo" src={photo1} alt="logo"/>
            <h1 className="card__title">Clean Design</h1>
            <p className="card__text">Increase sales by showing true dynamics of your website.</p> 
          </div>
          <div className="card__container">
            <img className="card__logo" src={photo3} alt="logo"/>
            <h1 className="card__title">Secure Data</h1>
            <p className="card__text">Build your online store’s trust using Social Proof & Urgency.</p> 
          </div>
          <div className="card__container">
            <img className="card__logo" src={photo2} alt="logo"/>
            <h1 className="card__title">Retina Ready</h1>
            <p className="card__text">Realize importance of social proof in customer’s purchase decision.</p> 
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer__container">
          <form className="footer__input">
            <input placeholder="Enter your email" type="text" className="footer__input-text" />
            <input placeholder="Subscribe" value="Subscribe" type="submit" className="footer__input-button" />
          </form>
          <div className="footer__info">
            <h1 className="footer__logo">AppCo</h1>
            <span className="footer__rights">All rights reserved by ThemeTags</span>
            <span className="footer__rights">Copyrights © 2019. </span>
          </div>
        </div>
      </footer>
    </header>
  );
};

export default Header;
