import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import PvP from "./pages/PvP.js";
import HomePage from "./pages/HomePage.js";
import PvE from "./pages/PvE.js";

import "../utilities.css";
import SignIn from "./pages/SignIn";
import PvPBruce from "./pages/PvPBruce";

let firebase = require('firebase');
let firebaseui = require('firebaseui')

const firebaseConfig = {
  apiKey: "AIzaSyAYL3GKR2hXbFmdpH_Aw6T5Y4e2vJgQJZk",
  authDomain: "swamphacks-e33f4.firebaseapp.com",
  databaseURL: "https://swamphacks-e33f4-default-rtdb.firebaseio.com",
  projectId: "swamphacks-e33f4",
  storageBucket: "swamphacks-e33f4.appspot.com",
  messagingSenderId: "754915290241",
  appId: "1:754915290241:web:d32e4edc3e08e85f633180"
};
firebase.initializeApp(firebaseConfig);


/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        this.setState({
          user: user
        })
        console.log('Valid User');
      }
      else{
        console.log('No User');
      }
    }.bind(this));
  }


  render() {

    if(this.state.user === null) {

      return <SignIn />
    }
    else if(this.state.user != null ) {
      return (
        <>
          <Router>
            <HomePage
              path="/"
              user={this.state.user}
            />
            <PvP
              path="/game"
              user={this.state.user}
            />
            <PvE
              path="/PvE"
              user={this.state.user}
            />
            <PvPBruce
              path="/PvPBruce"
              user={this.state.user}
            />

            <NotFound default />
          </Router>
        </>
      );
    }
  }
}

export default App;
