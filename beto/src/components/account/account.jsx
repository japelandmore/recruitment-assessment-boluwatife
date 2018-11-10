import React from 'react';

import './account.css';

import user from "../../images/user.jpg";
import location from "../../images/location.svg";
const Account = ({isSignedIn, routingHandler}) => {
  if (isSignedIn) {
    return (
      <div className="account__wrapper">
        <div className="side-nav">
          <div className="user">
            <img src={user} alt="user" className="user-img" />
            <div className="user-info">
              <h1 className="user-info__name">Larry Etim</h1>
              <br />
              <div className="user-info__location">
                <img src={location} alt="" className="user-location--img" />
                <h2 className="user-location">Lagos, Nigeria</h2>
              </div>
            </div>
          </div>

          {/* navigation */}
          <nav className="nav">
            <div className="nav-item">
              <div className="nav-item__wrap">
                <button className="nav__link nav__link--nav nav__link--1" onClick={() => routingHandler("contact")}>
                  <span>Contact</span>
                </button>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-item__wrap">
                <button className="nav__link nav__link--nav  nav__link--2">
                  <span>Notifications</span>
                </button>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-item__wrap">
                <button className="nav__link nav__link--nav  nav__link--3 nav__link--setting--active" >
                  <span>Account</span>
                </button>
              </div>
            </div>
          </nav>
          <hr />
          {/* for settings */}
          <nav className="nav">
            <div className="nav-item">
              <div className="nav-item__wrap">
                <a className="nav__link nav__link--setting nav__link--4" href="/">
                  <span>Settings</span>
                </a>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-item__wrap">
                <a className="nav__link  nav__link--setting nav__link--5" href="/">
                  <span>Help</span>
                </a>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-item__wrap">
                <a className="nav__link nav__link--setting nav__link--6" href="/">
                  <span>Feedback</span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="account__content">
          <div className="account-card--1">
            <div className="account-heading">Accounts</div>
            <div className="card-1--space">
              <div className="card-1--content">
                <a href="/" className="acc-link link-1">
                  Import from device
                </a>
              </div>
              <div className="card-1--content">
                <a href="/" className="acc-link link-2">
                  Import from Google
                </a>
              </div>
              <div className="card-1--content">
                <a href="/" className="acc-link link-3">
                  Import from Yahoo
                </a>
              </div>
              <div className="card-1--content">
                <a href="/" className="acc-link link-4">
                  Import from Facebook
                </a>
              </div>
              <div className="card-1--content">
                <a href="/" className="acc-link link-5">
                  Import from whatsapp
                </a>
              </div>
            </div>
          </div>
          <div className="account-card--2">
            <div className="card-2--heading">
              Control how your contacts are organised.
                </div>
            <div className="card-2--spacing">
              <div className="card-2--content">
                <a href="/" className="acc-link-2 link-6">
                  <span style={{ color: "#D54A69" }}>&#43; </span> New Contact
                    </a>
              </div>
              <div className="card-2--content">
                <a href="/" className="acc-link-2 link-7">
                  <span style={{ color: "#D54A69" }}>&#43;</span> Add Account
                    </a>
              </div>
              <div className="card-2--content">
                <a href="/" className="acc-link-2 link-8">
                  sync Options
                    </a>
              </div>
            </div>
          </div>
          <div className="account-card--3">
            <div className="card-2--heading">
              Manage your Profile
                </div>
            <div className="card-2--spacing">
              <div className="card-2--content">
                <button className="acc-link-2 link-7" onClick = {() => routingHandler("profile")}>
                  Edit Profile
                        </button>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
   
}

export default Account;