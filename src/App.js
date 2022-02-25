import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Order from "./Components/Order";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import schema from "./Validation/schema";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  bacon: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokes: false,
  pineapple: false,
  sardines: false,
  extraCheese: false,
  jalapenos: false,
  instructions: "",
};

const initialErrors = {
  name: "",
  size: "",
  instructions: "",
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);
  const [orders, setOrders] = useState([]);

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      grilledChicken: formValues.grilledChicken,
      onions: formValues.onions,
      greenPepper: formValues.greenPepper,
      dicedTomatoes: formValues.dicedTomatoes,
      blackOlives: formValues.blackOlives,
      roastedGarlic: formValues.roastedGarlic,
      artichokes: formValues.artichokes,
      pineapple: formValues.pineapple,
      sardines: formValues.sardines,
      extraCheese: formValues.extraCheese,
      jalapenos: formValues.jalapenos,
      instructions: formValues.instructions.trim(),
    };

    setFormValues(initialFormValues);

    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([...orders, res.data]);
      })
      .catch((err) => console.error(err));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="title">Joseph's Italian Eatery</h1>
        <div className="nav-links">
          <NavLink className="links" to="/">
            Home
          </NavLink>
          <NavLink id="order-pizza" className="links" to="/pizza">
            Order
          </NavLink>
        </div>
      </nav>
      <Switch>
        <Route path={"/pizza"}>
          <Form formValues={formValues} setFormValues={setFormValues} submit={submit} validate={validate} formErrors={formErrors} disabled={disabled} />
          {orders.map((order) => {
            return <Order key={order.id} order={order} />;
          })}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
