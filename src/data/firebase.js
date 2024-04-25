import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiyshjJSW2A4r71ozxJxtb7J_88McfAUs",
  authDomain: "webbshop-3401a.firebaseapp.com",
  projectId: "webbshop-3401a",
  storageBucket: "webbshop-3401a.appspot.com",
  messagingSenderId: "396081845574",
  appId: "1:396081845574:web:a16f4d7cbc5ca6dc000147",
  measurementId: "G-VRTRDES4XY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);