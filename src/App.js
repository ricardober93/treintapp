import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { routes } from 'routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        {
          routes.map(({ path, component, exact }, i) => (
            <Route key={i} path={path} exact={exact} component={component } />
          ))
          }
        </Switch>
        </div>
    </Router>
  );
}

export default App;
