import React from "react";
import Pizza from "../Assets/Pizza.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <img className="pizza-img" src={Pizza} alt="image of a pizza" />
      <Link to="/pizza">
        <button className="order-btn">Order Now</button>
      </Link>
    </div>
  );
};
export default Home;
