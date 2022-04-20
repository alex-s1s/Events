import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "token",
  authDomain: "crm-scrap.firebaseapp.com",
  projectId: "crm-scrap",
  storageBucket: "crm-scrap.appspot.com",
  messagingSenderId: "758253671500",
  appId: "appId",
};

export default firebase.initializeApp(firebaseConfig);
