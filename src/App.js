import { HashRouter } from "react-router-dom";
import Login from "./comp/Login.js";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Login/>
    </HashRouter>
  );
};

export default App;