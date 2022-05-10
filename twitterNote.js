// 트위터 -- nomard

/* 1. firebase -
    AWS amplify

    npm i firebase@9.6.1   
    npm i react-router-dom@5.3.0
	npm install --save react@16.13.0 react-dom@16.13.0
*/

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// ----------------------------------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYIYmmXdLovQla6RKpSWqakM4OFrcJS3A",
  authDomain: "nwitter-36112.firebaseapp.com",
  projectId: "nwitter-36112",
  storageBucket: "nwitter-36112.appspot.com",
  messagingSenderId: "459536735520",
  appId: "1:459536735520:web:9aaecf5b3bda0d6bc84b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ----------------------------------------------------------------------
base를 src로 만들기

jsconfig.json

{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}


// ----------------------------------------------------------------------