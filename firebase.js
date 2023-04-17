
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBZtvqkcSExcxmLSXhrug802KT2G6jB4Oc",
    authDomain: "apikeys-94f48.firebaseapp.com",
    projectId: "apikeys-94f48",
    storageBucket: "apikeys-94f48.appspot.com",
    messagingSenderId: "539906071296",
    appId: "1:539906071296:web:708d01292492b1488f71e5",
    measurementId: "G-DL3X0SND16"
  };
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
//export const db = firebase.firestore();
export const db = getFirestore(app);