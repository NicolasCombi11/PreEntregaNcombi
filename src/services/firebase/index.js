import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD-MBljnmvrJHkmESx_Yx2Tkmq-Gg51hmM",
  authDomain: "entregareact-588e9.firebaseapp.com",
  projectId: "entregareact-588e9",
  storageBucket: "entregareact-588e9.appspot.com",
  messagingSenderId: "1079486004036",
  appId: "1:1079486004036:web:ae17f7a76f2369f2fdf511",
  measurementId: "G-3TY1EK9WRG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
