import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCVMJgECJ3VhMhUSFgCbHzmk5w2ZEC5YBc",
  authDomain: "wedding-dresses-c095d.firebaseapp.com",
  databaseURL: "https://wedding-dresses-c095d-default-rtdb.firebaseio.com",
  projectId: "wedding-dresses-c095d",
  storageBucket: "wedding-dresses-c095d.appspot.com",
  messagingSenderId: "623119047250",
  appId: "1:623119047250:web:b57a35c326769a29179d8b",
  measurementId: "G-WWSHRKLER3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
