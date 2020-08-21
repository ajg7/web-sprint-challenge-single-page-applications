import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import formSchema from "./formSchema";
import Home from "./components/Home";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  toppings: {
    cheese: false,
    pepperoni: false,
    sausage: false,
    mushrooms: false
  },
  specialInstructions: ""
}

const initialFormErrors ={
  name: ""
}

const initialDisabled = true;

const App = () => {
  const [pizza, setPizza] = useState({});
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const inputChange = (key, value) => {
    yup
      .reach(formSchema, key)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [key]: "",
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [key]: error.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [key]: value
      })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }


  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings).filter(topping => formValues.toppings[topping]),
      specialInstructions: formValues.specialInstructions
    }

    axios.post("https://reqres.in/api/pizza", newPizza)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      
      setPizza(newPizza)
  }


  useEffect(() => {
    // 🔥 STEP 10- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])

  return (
    <>
      <Switch>
        <Route path="/pizza/confirmation">
          <Confirmation 
          pizza={pizza}
          />
        </Route>

        <Route path="/pizza">
          <Form 
          checkboxChange={checkboxChange}
          inputChange={inputChange}
          submit={submit}
          values={formValues}
          errors={formErrors}
          disabled={disabled}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
