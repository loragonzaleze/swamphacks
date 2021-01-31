import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import rits from "./assets/rits.png"

import './SignIn.css';

// This is the sign in page that is shown to new users
// Uses Firebaseui to create the Gmail and Email sign in blocks

let firebase = require('firebase');
let firebaseui = require('firebaseui');

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    //this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
  }
  render () {

    let uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(authResult)
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: '/',
    };

    return(
      <>
        <div className="signin-base">
          <div className="signin-container">
            <img src={rits} width="98%" style={{marginBottom: "40px", backgroundColor: "rgb(51 156 83 / 50%)", padding: "20px"}}/>
            <div id='firebaseui-auth-container'>
            </div>
            <div id='loader'>
            </div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;