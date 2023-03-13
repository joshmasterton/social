import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA45E2WLYlXnpaGKcIXoOC4jVQmjUWb4_c",
  authDomain: "social-bd999.firebaseapp.com",
  projectId: "social-bd999",
  storageBucket: "social-bd999.appspot.com",
  messagingSenderId: "1047622979046",
  appId: "1:1047622979046:web:9caf5cad23dd1322a3da27"
};
  
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 

export { app, auth };