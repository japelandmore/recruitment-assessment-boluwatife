// sign up component.
// required data: fullname, username, email, password, re-type password

import React from "react";

// import css file
import "./signUp.css";

// import images
import logo from "../../images/Logo.png";
import backgroundPink from "../../images/eclipse bg.svg";

// declare the initial states for the required data
const SignUp = ({getFullName, getUserName, getEmail, getPassword, getRetypedPassword, userValidation, error, errorText, routingHandler}) => {

  // check if the error is true or false and attach the errorText if true
  return error === false ? <div className="wrapper">
      <div className="header">
        <img src={logo} alt="app-logo" className="logo" />

        <nav>
          <ul className="main-nav">
            <li className="main-nav__item">
              <a href="/">Home</a>
            </li>
            <li className="main-nav__item">
              <a href="/">About</a>
            </li>
            <li className="main-nav__item">
              <a href="/">Pricing</a>
            </li>
            <li className="main-nav__item">
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="background--pink">
        <img src={backgroundPink} alt="background-pink" />
      </div>
      <div className="content">
        <div className="input-field">
          <div className="input-field__card">
            <label htmlFor="name">Fullname</label>
            <input type="text" name="fullname" className="input-field__card--element" onChange={getFullName} />

            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="input-field__card--element" onChange={getUserName} />

            <label htmlFor="email">Email</label>
            <input type="E-mail" name="email" className="input-field__card--element" onChange={getEmail} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="input-field__card--element" onChange={getPassword}/>

            <label htmlFor="retypepassword">Re-type password</label>
            <input type="password" name="retypepassword" className="input-field__card--element" onChange={getRetypedPassword}/>
            
            <div className="input-field__footer">
              <p>
                By signing up, you agree to our <button className="terms">
                  Terms & Condition
                </button> and read our <button className="terms">
                  {" "}
                  Privacy Policy
                </button>
              </p>

              <button className="input-field__button" onClick={userValidation}>
                Get Stated
              </button>

              <p>
              <span className="account">Already have an account?</span> <button className="terms" onClick={routingHandler}>
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-text__main">Be More.</h1>
            <h2 className="hero-text__sub">
              All your contacts from all your <br /> <span className="hero-text__sub--space">
                accounts <button className="terms hero-terms">
                  In One Place.
                </button>
              </span>
            </h2>
            <br />
            <div className="underline" />
          </div>
        </div>
      </div>
    </div> : <div className="wrapper">
      <div className="header">
        <img src={logo} alt="app-logo" className="logo" />

        <nav>
          <ul className="main-nav">
            <li className="main-nav__item">
              <a href="/">Home</a>
            </li>
            <li className="main-nav__item">
              <a href="/">About</a>
            </li>
            <li className="main-nav__item">
              <a href="/">Pricing</a>
            </li>
            <li className="main-nav__item">
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="background--pink">
        <img src={backgroundPink} alt="background-pink" />
      </div>
      <div className="content">
        <div className="input-field">
          {/* the error text goes here */}
          <h3 className="error-text">{errorText}</h3>
          <div className="input-field__card">
            <label htmlFor="name">Fullname</label>
            <input type="text" name="fullname" className="input-field__card--element" onChange={getFullName} />

            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="input-field__card--element" onChange={getUserName} />

            <label htmlFor="email">Email</label>
            <input type="E-mail" name="email" className="input-field__card--element" onChange={getEmail} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="input-field__card--element" onChange={getPassword} />

            <label htmlFor="retypepassword">Re-type password</label>
            <input type="password" name="retypepassword" className="input-field__card--element" onChange={getRetypedPassword} />
            <div className="input-field__footer">
              <p>
                By signing up, you agree to our <button className="terms">
                  Terms & Condition
                </button> and read our <button className="terms">
                  {" "}
                  Privacy Policy
                </button>
              </p>

              <button className="input-field__button" onClick={userValidation}>
                Get Stated
              </button>

              <p>
                <span className="account">Already have an account?</span> <button className="terms" onClick={routingHandler}>
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-text__main">Be More.</h1>
            <h2 className="hero-text__sub">
              All your contacts from all your <br /> <span className="hero-text__sub--space">
                accounts <button className="terms hero-terms">
                  In One Place.
                </button>
              </span>
            </h2>
            <br />
            <div className="underline" />
          </div>
        </div>
      </div>
    </div>;
}

export default SignUp;
