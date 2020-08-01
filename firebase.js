import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCc5KT-QfPw4thEbdCWmtHYxoGVTrIPwr4",
    authDomain: "tiktok-clone-36b76.firebaseapp.com",
    databaseURL: "https://tiktok-clone-36b76.firebaseio.com",
    projectId: "tiktok-clone-36b76",
    storageBucket: "tiktok-clone-36b76.appspot.com",
    messagingSenderId: "458330499393",
    appId: "1:458330499393:web:5bde2d8ed66a109f13d9c0",
    measurementId: "G-44YJ2QD00X"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;