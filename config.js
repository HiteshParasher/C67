import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIZGY2uhmHJ_OaYrejB5oihUPLsjKuzMA",
    authDomain: "classtest-63590.firebaseapp.com",
    projectId: "classtest-63590",
    storageBucket: "classtest-63590.appspot.com",
    messagingSenderId: "398012856504",
    appId: "1:398012856504:web:f0f276d6bf43e1a3f75c4d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();