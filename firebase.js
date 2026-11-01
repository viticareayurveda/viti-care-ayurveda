import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "viti-care-ayurveda.firebaseapp.com",
  databaseURL: "https://viti-care-ayurveda-default-rtdb.firebaseio.com",
  projectId: "viti-care-ayurveda",
  storageBucket: "viti-care-ayurveda.firebasestorage.app",
  messagingSenderId: "934664789541",
  appId: "1:934664789541:web:96506bf8c7ddbf58a4e9cc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
