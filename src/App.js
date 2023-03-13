import { HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebaseConfig.js";
import Login from "./comp/Login.js";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("Loading");

  useEffect(() => {
    onAuthStateChanged(auth, (userCred) => {
      setUser(userCred);
      console.log(user);
    });
  });

  return (
    <HashRouter>
      <Login user={user} setUser={setUser}/>
    </HashRouter>
  );
};

export default App;