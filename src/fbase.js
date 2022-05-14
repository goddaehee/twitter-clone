import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDf_D3fmXKsSdfozaVlUwYNwy0vDHqEyVc",
  authDomain: "nwitter-95801.firebaseapp.com",
  projectId: "nwitter-95801",
  storageBucket: "nwitter-95801.appspot.com",
  messagingSenderId: "933594669228",
  appId: "1:933594669228:web:300ddf8aed5d1640e2ff09",
};

const app = initializeApp(firebaseConfig);
//export const firebaseinstance = get;

export const auth = getAuth();
export const dbservice = getFirestore();
export const storageService = getStorage();
