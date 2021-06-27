import "./App.css";
import "./bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Explore from "./Components/Explore";
import Matches from "./Components/Matches";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/explore' render={(props) => <Explore />} />
          <Route exact path='/matches' render={(props) => <Matches />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
