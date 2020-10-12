import React from 'react';
import './App.css';
import { Route } from "wouter";
import { routes } from 'routes';
function App() {
  return (
    <div className="App">
      {
        routes.map(({ path, component }) => (
          <Route path={path} component={component } />
        ))
       }
    </div>
  );
}

export default App;
