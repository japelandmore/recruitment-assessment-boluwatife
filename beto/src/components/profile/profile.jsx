import React from 'react';

import "./profile.css";

import user from "../../images/user.jpg";
import location from "../../images/location.svg";
const Profile = ({isSignedIn, routingHandler}) => {
    if (isSignedIn) {
        return <div className="profile-wrapper">
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
                    <button className="nav__link nav__link--nav  nav__link--1" onClick={() => routingHandler("contact")}>
                      <span>Contacts</span>
                    </button>
                  </div>
                </div>
                <div className="nav-item">
                  <div className="nav-item__wrap">
                    <button className="nav__link nav__link--nav  nav__link--2" onClick={() => routingHandler("contact")}>
                      <span>Notifications</span>
                    </button>
                  </div>
                </div>
                <div className="nav-item">
                  <div className="nav-item__wrap">
                    <button className="nav__link nav__link--nav  nav__link--3 nav__link--setting--active" onClick={() => routingHandler("loggedIn")}>
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
            {/* main */}
            <div className="profile-main">
              <div className="account-heading">
                Accounts <span className="profile-text">
                  {" "}
                  > Profile
                </span>
              </div>
              <div className="profile-spacing">
                <div className="profile-edit">
                  <div className="edit-items">
                    <span className="name-heading">Name</span>
                    <div className="edit-name">
                      <span className="name">Larry Etim</span>
                      <button className="edit-link">Edit</button>
                    </div>

                    <div className="edit-1 edit-each">
                      <div className="edit-container">
                        <span className="edit-content">
                          +234-804-382-2445
                        </span>
                        <span className="edit-text">Mobile</span>
                      </div>
                      <button className="edit-link">Edit</button>
                    </div>

                    <div className="edit-2 edit-each">
                      <div className="edit-container">
                        <span className="edit-content">
                          +234-804-555-2445
                        </span>
                        <span className="edit-text">Other</span>
                      </div>
                      <button className="edit-link">Edit</button>
                    </div>

                    <div className="edit-3 edit-each">
                      <div className="edit-container">
                        <span className="edit-content">
                          larry.etim001@mail.com
                        </span>
                        <span className="edit-text">Email</span>
                      </div>
                      <button className="edit-link">Edit</button>
                    </div>

                    <div className="edit-4 edit-each">
                      <div className="edit-container">
                        <span className="edit-content">
                          Lagos, Nigeria
                        </span>
                        <span className="edit-text">Address</span>
                      </div>
                      <button className="edit-link">Edit</button>
                    </div>

                    <div className="edit-5 edit-each">
                      <div className="edit-container">
                        <span className="edit-content">
                          Rexxe Powerplant
                        </span>
                        <span className="edit-text">Work</span>
                      </div>
                      <button className="edit-link">Edit</button>
                    </div>
                  </div>
                </div>
                <div className="profile-picture-frame">
                  <img src={user} alt="profile img" className="profile-picture" />

                  <div className="profile-change">
                    <a href="/" className="pp-change">
                      Change Image
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>;
    } else {
        routingHandler("signin")
    }
}

export default Profile;