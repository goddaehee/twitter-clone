import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBYIYmmXdLovQla6RKpSWqakM4OFrcJS3A",
    authDomain: "nwitter-36112.firebaseapp.com",
    projectId: "nwitter-36112",
    storageBucket: "nwitter-36112.appspot.com",
    messagingSenderId: "459536735520",
    appId: "1:459536735520:web:9aaecf5b3bda0d6bc84b45"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;  //firebase.auth 프로퍼티를 이용하기위해 firebase export

export const getAuthService = getAuth();

// export const dbService = getFirestore();