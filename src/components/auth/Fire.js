

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
  export const fire = firebase.initializeApp(firebaseConfig);

  /**
 **for google sign in
 */
  
    export const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });

  /**
    * *for facebook sign in
    */
 
   export const facebookProvider = new firebase.auth.FacebookAuthProvider();
   
   facebookProvider.setCustomParameters({
    'display': 'popup',
    

  });

  