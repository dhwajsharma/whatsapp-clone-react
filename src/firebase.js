import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAadEmE_6KBC0XJzJSrbASPdkWuIE3oaow",
    authDomain: "whatsapp-clone-react-aa291.firebaseapp.com",
    projectId: "whatsapp-clone-react-aa291",
    storageBucket: "whatsapp-clone-react-aa291.appspot.com",
    messagingSenderId: "136882828105",
    appId: "1:136882828105:web:a91f00bb1b0745f8d76098"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;