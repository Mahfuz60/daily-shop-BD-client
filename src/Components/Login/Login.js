import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import Button from 'react-bootstrap/Button'
import './Login.css'
import firebaseConfig from './Firebase-Config';
import { UserContext } from './../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      
      firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
              
              const { displayName, email } = result.user;
              const signedInUser = { name: displayName, email }
              setLoggedInUser(signedInUser);
              history.replace(from);
             
          }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode,errorMessage)
          });

  }
  const storeAuthToken=()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      // console.log(idToken)
      sessionStorage.setItem('token', idToken);
      history.replace(from);
      
    }).catch(function(error) {
      // Handle error
    });
  }

    return (
        
            <div className='login-aria'>
            <h1 >Please Login</h1>
            <div className="googleBtn"><Button variant="warning" onClick={handleGoogleSignIn}>Google Log In</Button></div>
        </div>
            
        
    );
};

export default Login;