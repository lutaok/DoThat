// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import firebaseConfig from '../firebaseEnv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
let app;
const apps = getApps(firebaseConfig);
apps.forEach((existingApp) => {
  if (existingApp.options.appId === firebaseConfig.appId) {
    app = existingApp;
  }
});
if (!app) {
  app = initializeApp(firebaseConfig, 'DoThat!');
}
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
