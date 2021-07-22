import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCxiY7abJHbzLp_TI0NXgSKMD4z2RHrjJs",
        authDomain: "do3x-11045.firebaseapp.com",
        projectId: "do3x-11045",
        storageBucket: "do3x-11045.appspot.com",
        messagingSenderId: "769240294540",
        appId: "1:769240294540:web:c9406c5558fb34be7e47a9",
        measurementId: "G-XLJQSV8PPM"
  })

  const db = firebaseApp.firestore();

  export default db;
