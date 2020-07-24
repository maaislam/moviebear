

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZtqNuJqglBRvPL1Zmg6n7_rdHyBD6_vw",
    authDomain: "moviebear-50388.firebaseapp.com",
    databaseURL: "https://moviebear-50388.firebaseio.com",
    projectId: "moviebear-50388",
    storageBucket: "moviebear-50388.appspot.com",
    messagingSenderId: "191414824447",
    appId: "1:191414824447:web:cdf3c8c112d6ba50c64bca"
  };

  const fire = firebase.initializeApp(firebaseConfig);
    export default fire;