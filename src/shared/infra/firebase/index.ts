import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: `${process.env.APP_API_KEY}`,
  authDomain: `${process.env.APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.APP_DATABASE_URL}`,
  projectId: `${process.env.APP_PROJECT_ID}`,
  storageBucket: `${process.env.APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.APP_MESSAGING_SENDER_ID}`,
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
