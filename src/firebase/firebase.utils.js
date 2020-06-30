import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBFKB19KKEGyvvU-iKxI6DndNO13BitfeU",
        authDomain: "eshop-db-60a7c.firebaseapp.com",
        databaseURL: "https://eshop-db-60a7c.firebaseio.com",
        projectId: "eshop-db-60a7c",
        storageBucket: "eshop-db-60a7c.appspot.com",
        messagingSenderId: "44214798155",
        appId: "1:44214798155:web:c1cfaccb2a2ae8aa18cace",
        measurementId: "G-ZPPELZK49B"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase .firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;