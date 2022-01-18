import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCtbicHZA7M7rSEvKLqnzHm_jspP2es3o8",
    authDomain: "reactarchillaezequiel.firebaseapp.com",
    projectId: "reactarchillaezequiel",
    storageBucket: "reactarchillaezequiel.appspot.com",
    messagingSenderId: "126733430381",
    appId: "1:126733430381:web:b775265bd1bc54416cd964"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);