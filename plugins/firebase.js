import firebase from 'firebase'

if(!firebase.app.length){
  firebase.initializeApp({
    apiKey: "AIzaSyBLjhvXVNGtzON58CLLbZ9-G2jopxLj7Bo",
    authDomain: "task-wiz-2e118.firebaseapp.com",
    databaseURL: "https://task-wiz-2e118.firebaseio.com",
    projectId: "task-wiz-2e118",
    storageBucket: "task-wiz-2e118.appspot.com",
    messagingSenderId: "1089569663599",
    appId: "1:1089569663599:web:5e6e5246311ffd2cdabb9a",
    measurementId: "G-5Z9FV06NMR"
  })
}

export default firebase
