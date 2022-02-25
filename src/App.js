import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";
import "./App.css";

const App = () => {
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
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
