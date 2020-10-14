import * as firebase from 'firebase/app';

import 'firebase-firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB3xV_rD9edYj6usTYgWIEZnShTCRwOv4s',
  authDomain: 'netflix-4b57c.firebaseapp.com',
  databaseURL: 'https://netflix-4b57c.firebaseio.com',
  projectId: 'netflix-4b57c',
  storageBucket: 'netflix-4b57c.appspot.com',
  messagingSenderId: '152879675205',
  appId: '1:152879675205:web:682072ae38e3819622b02c',
};

firebase.initializeApp(firebaseConfig);

seedDatabase(firebase);
export { firebase };
