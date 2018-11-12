import React from 'react';

// import images
import logo from "../../images/Logo.png";
import backgroundPink from "../../images/eclipse bg.svg";

const Signin = ({ error, errorText, loginEmail, loginPassword, signinValidation, routingHandler }) => {
    
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
          <div id="input-field--signin">
            <div className="input-field__card">
              <label htmlFor="email">Email</label>
              <input type="E-mail" name="email" className="input-field__card--element" onChange={loginEmail} />

              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="input-field__card--element" onChange={loginPassword} />

              <div className="input-field__footer">
                <p>
                  By signing up, you agree to our <button className="terms">
                    Terms & Condition
                  </button> and read our
                  <button className="terms"> Privacy Policy</button>
                </p>
                <button className="input-field__button" onClick={signinValidation}>
                  Login
                </button>
                <p>
                  <span className="account">Dont have an account?</span> <button className="terms" onClick={() => routingHandler("register")}>
                    Get Stated
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
          <div id="input-field--signin">
            <div className="input-field__card">
              {/* the error text goes here */}
              <h3 className="error-text-signin">{errorText}</h3>
              <label htmlFor="email">Email</label>
              <input type="E-mail" name="email" className="input-field__card--element" onChange={loginEmail} />

              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="input-field__card--element" onChange={loginPassword} />

              <div className="input-field__footer">
                <p>
                  By signing up, you agree to our <button className="terms">
                    Terms & Condition
                  </button> and read our
                  <button className="terms"> Privacy Policy</button>
                </p>
                <button className="input-field__button" onClick={signinValidation}>
                  Login
                </button>
                <p>
                  <span className="account">Dont have an account?</span> <button className="terms" onClick={() => routingHandler("register")}>
                    Get Stated
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
      </div>
      
}

export default Signin;
       


