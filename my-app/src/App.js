import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import routes from './routes/routes';
function App() {
  function getRoutes() {
    return routes.map((prop, key) => {
      return (
        <Route exact path={prop.path} component={prop.component} key={key} />
      );
    });
  }
  return (
    <BrowserRouter>
      <Switch>{getRoutes()}</Switch>
    </BrowserRouter>
  );
}

export default App;
