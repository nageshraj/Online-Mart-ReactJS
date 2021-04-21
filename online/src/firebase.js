import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKTvznp3NIxIUn2m8fh9vQ5SpQ7x_DVrM",
    authDomain: "online-db913.firebaseapp.com",
    projectId: "online-db913",
    storageBucket: "online-db913.appspot.com",
    messagingSenderId: "745611967825",
    appId: "1:745611967825:web:c25022e6eee8556d082770",
    measurementId: "G-LX73NC0ZGX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};