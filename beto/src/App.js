import React, { Component } from "react";
// import logo from "./images/eclipse bg.svg";
import "./App.css";

// import built modules
import SignUp from "./components/signUp/signUp.jsx";
import SignIn from "./components/signIn/signIn.jsx";
import Contact from "./components/contact/contact.jsx";
import Account from "./components/account/account.jsx";
import Profile from "./components/profile/profile.jsx";

const initialState = {
  user: [],
  fullName: "",
  userName: "",
  email: "",
  password: "",
  retypedPassword: "",
  route: "register",
  isSignedIn: false,
  error: false,
  errorText: ""
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // State functions to be called on change in the input fields
  getFullName = e => {
    this.setState({ fullName: e.target.value });
  };

  getUserName = e => {
    this.setState({ userName: e.target.value });
  };

  getEmail = e => {
    this.setState({ email: e.target.value });
  };

  getPassword = e => {
    this.setState({ password: e.target.value });
  };

  getRetypedPassword = e => {
    this.setState({ retypedPassword: e.target.value });
  };

  // get email handler
  loginEmail = e => {
    this.setState({ email: e.target.value });
  };
  // get password handler
  loginPassword = e => {
    this.setState({ password: e.target.value });
  };

  getNewUser = newUserObject => {
    // push the object into the user array
    const userCopy = this.state.user.slice();

    userCopy.push(newUserObject);

    this.setState({ user: userCopy });

    // log the user in
    this.setState({ isSignedIn: true });
    this.routingHandler("contact");
  };

  // New User hander
  newUser = (fullName, userName, email, password) => {
    // check if the email is not already in use and if no, call getNewUser
    const { user } = this.state;
    // check if the user array contains the email specified
    const foundUser = user.filter(user => {
      return user.email === email;
    });

    if (foundUser.length > 0) {
      // check the returned values
      const foundUserChecked =
        foundUser[0].email.length === email.length &&
        foundUser[0].email === email
          ? foundUser[0]
          : false;

      if (foundUserChecked) {
        this.setState({
          error: true,
          errorText: "Unauthorized, log in or sign Up"
        });
      } else {
        // get the new user object and save in the user array
        const newUserObject = {
          fullName: fullName,
          userName: userName,
          email: email,
          password: password
        };

        this.getNewUser(newUserObject);
      }
    } else {
      // get the new user object and save in the user array
      const newUserObject = {
        fullName: fullName,
        userName: userName,
        email: email,
        password: password
      };

      this.getNewUser(newUserObject);
    }
  };

  // user login handler
  oldUser = (email, password) => {
    const { user } = this.state;
    // check if the user array contains the email and the specified password
    const foundUser = user.filter(user => {
      return user.email === email && user.password === password;
    });

    if (foundUser.length > 0) {
      // check if the found user is authorized with the email and password
      const foundUserChecked =
        foundUser[0].email.length === email.length &&
        foundUser[0].email === email &&
        foundUser[0].password.length === password.length &&
        foundUser[0].password === password;

      if (foundUserChecked) {
        this.setState({ isSignedIn: true });
        this.routingHandler("contact");
      } else {
        this.setState({
          error: true,
          errorText: "Unauthorized, log in or sign Up"
        });
      }
    } else {
      this.setState({
        error: true,
        errorText: "Unauthorized, log in or sign Up"
      });
    }
  };

  // make sure everything is valid
  // New User function
  userValidation = () => {
    const { fullName, userName, email, password, retypedPassword } = this.state;

    // verify the required fields
    const checkedFullName =
      typeof fullName === "string" && fullName !== "" ? fullName.trim() : false;

    const checkedUserName =
      typeof userName === "string" && userName !== "" ? userName.trim() : false;

    const checkedEmail =
      typeof email === "string" && email !== "" ? email.trim() : false;

    const checkedPassword =
      typeof password === "string" &&
      password !== "" &&
      password.trim() === retypedPassword.trim()
        ? password.trim()
        : false;

    // check if the required fields are not empty on submit
    if (checkedFullName && checkedUserName && checkedEmail && checkedPassword) {
      // call the user props and send the expected values
      this.newUser(fullName, userName, email, password, retypedPassword);
    } else {
      this.setState({ error: true, errorText: "Required fields are missing" });
    }
  };

  // signIn validation handler
  signinValidation = () => {
    const { email, password } = this.state;

    // verify the email and password
    const checkedEmail =
      typeof email === "string" && email !== "" ? email.trim() : false;

    const checkedPassword =
      typeof password === "string" && password !== "" ? password.trim() : false;

    // check if the required fields are not empty on submit
    if (checkedEmail && checkedPassword) {
      // load the old user
      this.oldUser(checkedEmail, checkedPassword);
    } else {
      this.setState({
        error: true,
        errorText: "Missing required fields"
      });
    }
  };

  // routing Handler
  routingHandler = route => {
    if (route === "loggedIn") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  // onRouteChange = (route) => {
  //   if (route === 'SignOut') {
  //     window.sessionStorage.removeItem('token');
  //     return this.setState(initialState)
  //   } else if (route === "Home") {
  //     this.setState({ isSignedIn: true })
  //   }
  //   this.setState({ route: route })
  // }
  render() {
    const { route, errorText, error, isSignedIn } = this.state;

    // Hnadle the route with authentication
    if (route === "register") {
      return (
        <SignUp
          error={error}
          errorText={errorText}
          newUser={this.newUser}
          getFullName={this.getFullName}
          getUserName={this.getUserName}
          getEmail={this.getEmail}
          getPassword={this.getPassword}
          getRetypedPassword={this.getRetypedPassword}
          routingHandler={this.routingHandler}
          userValidation={this.userValidation}
        />
      );
    } else if (route === "loggedIn" && isSignedIn === true) {
      return (
        <Account isSignedIn={isSignedIn} routingHandler={this.routingHandler} />
      );
    } else if (route === "contact" && isSignedIn === true) {
      return (
        <Contact isSignedIn={isSignedIn} routingHandler={this.routingHandler} />
      );
    } else if (route === "profile" && isSignedIn === true) {
      return (
        <Profile isSignedIn={isSignedIn} routingHandler={this.routingHandler} />
      );
    } else {
      return (
        <SignIn
          oldUser={this.oldUser}
          error={error}
          errorText={errorText}
          loginEmail={this.loginEmail}
          loginPassword={this.loginPassword}
          signinValidation={this.signinValidation}
          routingHandler={this.routingHandler}
        />
      );
    }
  }
}

export default App;
