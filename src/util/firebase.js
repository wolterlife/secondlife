import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, onValue, set, remove } from '@firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDqItfzSpzrK4FxJHHEeU5vlbyjLezvMHY",
  authDomain: "second-life-6f734.firebaseapp.com",
  databaseURL: "https://second-life-6f734-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "second-life-6f734",
  storageBucket: "second-life-6f734.appspot.com",
  messagingSenderId: "1075015144822",
  appId: "1:1075015144822:web:36399d14a9654b9b7b5657",
  measurementId: "G-RXBEXMVLDQ"
};

const firebase = initializeApp(firebaseConfig);

export { ref, push, get, onValue, set, remove };

export const database = getDatabase(firebase);
