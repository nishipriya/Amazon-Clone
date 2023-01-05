import firebase from "firebase";
// eslint-disable-next-line
const firebaseConfig = {
  apiKey: "AIzaSyBLAcU0Kix5LlFVsCFs8-n2y8pvSYulniE",
  authDomain: "clone-f97a9.firebaseapp.com",
  projectId: "clone-f97a9",
  storageBucket: "clone-f97a9.appspot.com",
  messagingSenderId: "860934834613",
  appId: "1:860934834613:web:651c48b0e9ed8fbed271fc",
  measurementId: "G-NVWNQTK2Z7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
const auth = firebase.auth();
export default auth;