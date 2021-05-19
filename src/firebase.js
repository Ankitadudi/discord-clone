import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBk-iDuUCl23WNhFDJn5wq3TF7g1cY1rxM",
    authDomain: "discord-clone-86b8b.firebaseapp.com",
    projectId: "discord-clone-86b8b",
    storageBucket: "discord-clone-86b8b.appspot.com",
    messagingSenderId: "499908186690",
    appId: "1:499908186690:web:0d26d063a627103b36d3db",
    measurementId: "G-W02RSE51YR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  