// import { initializeApp } from "firebase/app";
import app from "firebase/compat/app";
// import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./config";
import "firebase/compat/firestore";
import "firebase/compat/storage";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

// const firebase = initializeApp(firebaseConfig);
// console.log("firebase", firebase);
const firebase = new Firebase();
// console.log("firebase", firebase);
export default firebase;
