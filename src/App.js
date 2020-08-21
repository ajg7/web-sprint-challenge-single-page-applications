import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Form from "./components/Form"

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/pizza">
          <Form />
        </Route>
      </Switch>
    </>
  );
};
export default App;
