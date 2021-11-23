import firebase from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyCpL6sAW5Kk8IOVZCEKXjUHmOIHd_Uo5uU",
  authDomain: "crm-scrap.firebaseapp.com",
  projectId: "crm-scrap",
  storageBucket: "crm-scrap.appspot.com",
  messagingSenderId: "758253671500",
  appId: "1:758253671500:web:91a5c6c8ef0f2a1d5750e9"
};

export default firebase.initializeApp(firebaseConfig);
