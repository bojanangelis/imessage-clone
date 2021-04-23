import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUDFBxBzutyL_kGeJIlx5CP32LH8TarMo",
    authDomain: "imessage-clone-5bc0a.firebaseapp.com",
    projectId: "imessage-clone-5bc0a",
    storageBucket: "imessage-clone-5bc0a.appspot.com",
    messagingSenderId: "562850120670",
    appId: "1:562850120670:web:8726312f36372e10b1534f",
    measurementId: "G-YBDW64HRP2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 
