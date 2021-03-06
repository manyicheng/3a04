import "./App.css";
import Homepage from "./components/homepage.js";
import Chalkboard from "./components/Chalkboard.js";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Memory from "./components/Memory";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Homepage} />
        <Route path="/mathgame" component={Chalkboard} />
        <Route path="/Memory" component={Memory} />
        <Route path="/wuhoo" component={Quiz} />
      </div>
    </Router>
  );
}

export default App;
