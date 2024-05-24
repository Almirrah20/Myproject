import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PhoneVerify from "../PhoneVerify";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Import the Firebase Auth module

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_MJZNyh2xgiojCNymRS3aFR85Ldpbbp4",
    authDomain: "otp-verify-be21a.firebaseapp.com",
    projectId: "otp-verify-be21a",
    storageBucket: "otp-verify-be21a.appspot.com",
    messagingSenderId: "62499510779",
    appId: "1:62499510779:web:8bdd7307919e3b5417135e",
    measurementId: "G-7JTLPTHSZP"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Newotp() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unSubscriber = firebase.auth().onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      if (currentUser) {
        history.push("/"); // Redirect to Signup page if user is verified
      }
    });

    return () => unSubscriber();
  }, [history]);

  return (
    <div className="App">
      <h1>Verify Phone Number with OTP</h1>
      <PhoneVerify auth={firebase.auth()} />
    </div>
  );
}

export default Newotp;
