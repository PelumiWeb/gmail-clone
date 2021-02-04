import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBZ5kvOckOwYmDPLW_uuRlQmMnrDyNpo_k",
    authDomain: "clone-yt-153e3.firebaseapp.com",
    projectId: "clone-yt-153e3",
    storageBucket: "clone-yt-153e3.appspot.com",
    messagingSenderId: "1037924280147",
    appId: "1:1037924280147:web:79f0c3fc614d93198923a6",
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig) 
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider} 