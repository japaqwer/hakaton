import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCDt_6sJXn6V1QYREhUr88aIu_PTxVWpwY',
  authDomain: 'haka-12a33.firebaseapp.com',
  projectId: 'haka-12a33',
  storageBucket: 'haka-12a33.appspot.com',
  messagingSenderId: '993944315044',
  appId: '1:993944315044:web:45d426fcd90c13b951b231',
  measurementId: 'G-BLP3ZRBCY5',
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
