import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Form from "./components/Form"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      
      <Route path="/">
        <Home />
      </Route>

      <Route path="/pizza">
        <Form />
      </Route>
    </>
  );
};
export default App;
