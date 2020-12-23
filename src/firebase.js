import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDGN5SlSehU9TgX5Dgjy_2q_Jf6L4sJjfM",
  authDomain: "news-a37ba.firebaseapp.com",
  projectId: "news-a37ba",
  storageBucket: "news-a37ba.appspot.com",
  messagingSenderId: "124513607666",
  appId: "1:124513607666:web:a4a7b75dfe3da7be1bd56b",
  measurementId: "G-YH4YQ9ZJK2",
});


const auth = firebase.auth();


export { auth};


