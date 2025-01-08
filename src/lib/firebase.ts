import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqmfUwtRF0PvskOx15ia8EgSPTgS3MyYM",
  authDomain: "gd-mba-test.firebaseapp.com",
  projectId: "gd-mba-test",
  storageBucket: "gd-mba-test.firebasestorage.app",
  messagingSenderId: "732390102409",
  appId: "1:732390102409:web:3a3dcc98983d38996bfd58",
  measurementId: "G-VM318L2QK8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);