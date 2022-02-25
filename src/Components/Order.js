import React from "react";
import "./Order.css";

const Order = (props) => {
  const { order } = props;
  return (
    <div className="order-container">
      <h1>Thank You for Ordering!</h1>
      <h2>Your Order Summary:</h2>
      <h3>
        <span>Ordered At:</span> {order.createdAt}
      </h3>
      <h3>
        <span>Name:</span> {order.name}
      </h3>
      <h3>
        <span>Size:</span> {order.size}
      </h3>
      <h3>
        <span>Toppings:</span>
      </h3>
      <h4>{order.pepperoni ? "Pepperoni" : ""}</h4>
      <h4>{order.sausage ? "Sausage" : ""}</h4>
      <h4>{order.bacon ? "Bacon" : ""}</h4>
      <h4>{order.grilledChicken ? "Grilled Chicken" : ""}</h4>
      <h4>{order.onions ? "Onions" : ""}</h4>
      <h4>{order.greenPepper ? "Green Peppers" : ""}</h4>
      <h4>{order.dicedTomatoes ? "Diced Tomatoes" : ""}</h4>
      <h4>{order.blackOlives ? "Black Olives" : ""}</h4>
      <h4>{order.roastedGarlic ? "Roasted Garlic" : ""}</h4>
      <h4>{order.artichokes ? "Artichokes" : ""}</h4>
      <h4>{order.pineapple ? "Pineapple" : ""}</h4>
      <h4>{order.sardines ? "Sardines" : ""}</h4>
      <h4>{order.extraCheese ? "Extra Cheese" : ""}</h4>
      <h4>{order.jalapenos ? "Jalapenos" : ""}</h4>
      <h3>
        <span>Instructions:</span> {order.instructions}
      </h3>
      <h2>Your order will be ready in 20 minutes.</h2>
    </div>
  );
};

export default Order;
