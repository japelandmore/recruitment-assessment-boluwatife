import React, {Component} from 'react';

// import css
import "./contact.css";

// import icon
import Icon from "../Icon/icon";

// import images
import user from '../../images/user.jpg';
import location from '../../images/location.svg';
import user1 from '../../images/user-1.jpg';
import user2 from '../../images/user-2.jpg';
import edit from '../../images/edit.svg';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false
    }
  
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  
  render() {
    const { isSignedIn, routingHandler } = this.props;
    if (isSignedIn) {
      return <div className="contact">
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
                  <button className="nav__link nav__link--nav  nav__link--1 nav__link--setting--active" onClick={() => routingHandler("contact")}>
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
                  <button className="nav__link nav__link--nav  nav__link--3" onClick={() => routingHandler("loggedIn")}>
                    <span>Accounts</span>
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

          {/* Main content */}
          <div className="main-content">
            <div className="header">
              <div className="contacts">
                <span>Contacts</span>
              </div>
              <div className="search">
                <input type="text" className="search__input" placeholder="Search transactions" />
              </div>
              <div className="search-google">
                <a href="/" className="new-search">
                  <span>Google</span>
                </a>
              </div>
            </div>

            <div className="contact-heading">
            <h1 className="contact-heading-each">Name</h1>
            <h1 className="contact-heading-each">Phone number</h1>
            <h1 className="contact-heading-each">Email</h1>
            </div>
            <div className="contacts-wrap">
              <div className="alphabet">A</div>
              <div className="contact-collection">
                <div className="contact-wrapper">
                  <img src={user1} alt="contacts" className="contact-img" />
                  <div class="contacts table" aria-labelledby="contacts-caption-text">
                    <ul class="tbody">
                      <li class="tr" itemscope itemtype="http://schema.org/Person">
                        <span class="td">
                          <span class="label">Name</span>
                          <span class="data" itemprop="name" aria-labelledby="th-name">
                            Aaron Cooperfield
                          </span>
                        </span>
                        <span class="td">
                          <span class="label">Phone:</span>
                          <span class="data" itemprop="telephone" aria-labelledby="th-phone">
                            +23473648628298
                          </span>
                        </span>
                        <span class="td">
                          <span class="label">Email</span>
                          <span class="data" itemprop="email" aria-labelledby="th-email">
                            <span className="email-1">
                              cooperfield.a@mail.com
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="hover-display">
                  <button className="hover-text" onClick={() => routingHandler("profile")}>Desiner at Rexxe</button>
                    <img src={edit} alt="" className="hover-edit" />
                    <Icon routingHandler={routingHandler}/>
                  </div>
                </div>
                <div className="contact-wrapper">
                  <img src={user1} alt="contacts" className="contact-img" />
                  <div class="contacts table" aria-labelledby="contacts-caption-text">
                    <ul class="tbody">
                      <li class="tr" itemscope itemtype="http://schema.org/Person">
                        <span class="td">
                          <span class="label">Name</span>
                          <span class="data" itemprop="name" aria-labelledby="th-name">
                            Aaron Cooperfield
                          </span>
                        </span>
                        <span class="td">
                          <span class="label">Phone:</span>
                          <span class="data" itemprop="telephone" aria-labelledby="th-phone">
                            +23473648628298
                          </span>
                        </span>
                        <span class="td">
                          <span class="label">Email</span>
                          <span class="data" itemprop="email" aria-labelledby="th-email">
                            <span className="email-1">
                              cooperfield.a@mail.com
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="hover-display">
                  <button className="hover-text" onClick={() => routingHandler("profile")}>Desiner at Rexxe</button>
                    <img src={edit} alt="" className="hover-edit" />
                    <Icon routingHandler={routingHandler}/>
                  </div>
                </div>
              </div>
            </div>

            {/* for B */}
            <div className="contacts-wrap">
              <div className="alphabet">B</div>
              <div className="contact-collection">
                <div className="contact-wrapper">
                  <img src={user2} alt="contacts" className="contact-img" />
                  <div class="contacts table" aria-labelledby="contacts-caption-text">
                    <ul class="tbody">
                      <li class="tr" itemscope itemtype="http://schema.org/Person">
                        <span class="td">
                          <span class="label">Name</span>
                          <span class="data" itemprop="name" aria-labelledby="th-name">
                            Bamidele Seun
                          </span>
                        </span>
                        <span class="td">
                          <span class="label">Phone:</span>
                          <span class="data" itemprop="telephone" aria-labelledby="th-phone">
                            +23473648628298
                          </span>
                        </span>
                        <span class="td">
                          <span class="label">Email</span>
                          <span class="data" itemprop="email" aria-labelledby="th-email">
                            <span className="email-1">
                              cooperfield.a@mail.com
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="hover-display">
                  <button className="hover-text" onClick={() => routingHandler("profile")}>Desiner at Rexxe</button>
                    <img src={edit} alt="" className="hover-edit" />
                    <Icon routingHandler={routingHandler}/>
                  </div>
                </div>
                <div className="contact-wrapper">
                  <img src={user2} alt="contacts" className="contact-img" />
                  <div class="contacts table" aria-labelledby="contacts-caption-text">
                    <ul class="tbody">
                      <li class="tr" itemscope itemtype="http://schema.org/Person">
                        <span class="td">
                          <span class="label">Name</span>
                          <span class="data" itemprop="name" aria-labelledby="th-name">
                            Bamidele Seun
                          </span>
                        </span>
                        <span class="td">
                          <span class="label">Phone:</span>
                          <span class="data" itemprop="telephone" aria-labelledby="th-phone">
                            +23473648628298
                          </span>
                        </span>
                        <span class="td">
                          <span class="label">Email</span>
                          <span class="data" itemprop="email" aria-labelledby="th-email">
                            <span className="email-1">
                              cooperfield.a@mail.com
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="hover-display">
                    <button className="hover-text" onClick={() => routingHandler("profile")}>Desiner at Rexxe</button>
                    <img src={edit} alt="" className="hover-edit" />
                    <Icon routingHandler={routingHandler}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
    } else {
      routingHandler("signin");
    }
  }
  
}
  


export default Contact;