import React from "react";
import Main from './components/Main'
import OtherDetails from "./components/OtherDetails"
import Preview from "./components/Preview";
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
         <Route path='/Preview'>
          <Preview />
          </Route>
          <Route path='/OtherDetails'>
          <OtherDetails />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
