import Home from "./Home/Home";
import pageOne from "./Components/Page1/pageOne"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
         {/*  404 Pages */}
        
          <Route exact path="/one" component={pageOne} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
