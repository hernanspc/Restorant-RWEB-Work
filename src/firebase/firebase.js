import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);
//   }
// }

const firebase = initializeApp(firebaseConfig);
// const firebase = new Firebase();
export default firebase;
