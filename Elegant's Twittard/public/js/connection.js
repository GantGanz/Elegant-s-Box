// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBTrYq75EnowUIo5C2Wx0MK4Y_pm82XeaQ",
    authDomain: "elegant-s-twittard.firebaseapp.com",
    databaseURL: "https://elegant-s-twittard.firebaseio.com",
    projectId: "elegant-s-twittard",
    storageBucket: "elegant-s-twittard.appspot.com",
    messagingSenderId: "694189137293",
    appId: "1:694189137293:web:22adfbd3b5e6a58ccdf1c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();