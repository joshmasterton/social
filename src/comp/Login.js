import { useState } from "react";
import "../style/Login.css";

const Login = () => {
  // Button to decide which page to render
  const [isLogin, setIsLogin] = useState(true);
  // Input fields for login or create details
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [createUsername, setCreateUsername] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPass, setCreatePass] = useState("");
  const [createConPass, setCreateConPass] = useState("");

  if(isLogin === true){
    return (
      <div id="login">
        <header>
          <h1>Login</h1>
        </header>
        <form>
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" onChange={(e) => {
            setLoginEmail(e.target.value);
          }} value={loginEmail} type="email" required/>
          <label htmlFor="loginPass">Password</label>
          <input id="loginPass" onChange={(e) => {
            setLoginPass(e.target.value);
          }} value={loginPass} type="password" required/>
          <button>Login</button>
        </form>
        <footer>
          <div>Need An Account?</div>
          <button onClick={() => {
            setIsLogin(false);
            // Clear all input fields
            setLoginEmail("");
            setLoginPass("");
          }}>Create Account</button>
        </footer>
      </div>
    );    
  }else{
    return (
      <div id="login">
        <header>
          <h1>Create Account</h1>
        </header>
        <form>
          <label htmlFor="createUsername">Username</label>
          <input id="createUsername" onChange={(e) => {
            setCreateUsername(e.target.value);
          }} value={createUsername} type="text" required/>
          <label htmlFor="createEmail">Email</label>
          <input id="createEmail" onChange={(e) => {
            setCreateEmail(e.target.value);
          }} value={createEmail} type="email" required/>
          <label htmlFor="createPass">Password</label>
          <input id="createPass" onChange={(e) => {
            setCreatePass(e.target.value);
          }} value={createPass} type="password" required/>
          <label htmlFor="createConPass">Confirm Password</label>
          <input id="createConPass" onChange={(e) => {
            setCreateConPass(e.target.value);
          }} value={createConPass} type="password" required/>
          <button onClick={() => {
            if(createPass === createConPass){

            }else{
              alert("Passwords Do Not Match")
            };
          }}>Create Account</button>
        </form>
        <footer>
          <div>Have An Account?</div>
          <button onClick={() => {
            setIsLogin(true);
            // Clear all input fields
            setCreateUsername("");
            setCreateEmail("");
            setCreatePass("");
            setCreateConPass("");
          }}>Login</button>
        </footer>
      </div>
    );    
  };
};

export default Login;