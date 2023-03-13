import { HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebaseConfig.js";
import Login from "./comp/Login.js";
import Loading from "./comp/Loading.js";
import Home from "./comp/Home.js";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("Loading");

  useEffect(() => {
    onAuthStateChanged(auth, (userCred) => {
      setUser(userCred);
      console.log(user);
    });
  });

  if(user === "Loading"){
    return <Loading/>
  }else if(user === null){
    return <Login user={user} setUser={setUser}/>
  }else{
    return (
      <HashRouter>
        <Home user={user}/>
      </HashRouter>
    );
  };
};

export default App;