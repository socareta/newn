import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import UserRoutes from "../routes/UserRoutes";

const Home = () => {
  

  return (
    <div className="container">
      <header className="jumbotron text-center">
        <h3>Welcome To this system </h3>
        <Link 
          to={"/login"} 
          className="btn btn-info">
          Login
        </Link>
      </header>
    </div>
  );
};

export default Home;
