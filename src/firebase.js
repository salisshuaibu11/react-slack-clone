import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyslfONiIhsXwutSyTJ_YDfs0d3DlEWfw",
  authDomain: "react-slack-clone-feeea.firebaseapp.com",
  projectId: "react-slack-clone-feeea",
  storageBucket: "react-slack-clone-feeea.appspot.com",
  messagingSenderId: "93210916395",
  appId: "1:93210916395:web:2612f803221d64e41f9c6e",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
