import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Form from "./components/Form"
import Confirmation from "./components/Confirmation"

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza/confirmation">
          <Confirmation />
        </Route>

        <Route path="/pizza">
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
