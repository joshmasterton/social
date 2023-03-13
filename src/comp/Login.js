import { useEffect, useState } from "react";
import "../style/Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
  }, [isLogin]);

  if(isLogin === true){
    return (
      <div id="login">
        <header>
          <h1>Login</h1>
        </header>
        <form>
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail"/>
          <label htmlFor="loginPass">Password</label>
          <input id="loginPass"/>
          <button>Login</button>
        </form>
        <footer>
          <div>Need an account?</div>
          <button onClick={(e) => {
            e.preventDefault();
            setIsLogin(false);
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
          <input id="createUsername"/>
          <label htmlFor="createEmail">Email</label>
          <input id="createEmail"/>
          <label htmlFor="createPass">Password</label>
          <input id="createPass"/>
          <label htmlFor="createConPass">Confirm Password</label>
          <input id="createConPass"/>
          <button>Create Account</button>
        </form>
        <footer>
          <div>Have an account?</div>
          <button onClick={(e) => {
            e.preventDefault();
            setIsLogin(true);
          }}>Login</button>
        </footer>
      </div>
    );    
  };
};

export default Login;