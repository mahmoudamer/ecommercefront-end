import React from "react";
import { NavLink } from "react-router-dom";
// import LogIn from './../signIn-up/logIn'
import './navigation.css';


const navigation = () => {
  return (
    <>

      <div className="nav-container">
        <div className="nav-navigation">
          <NavLink to="/register" className="nav-item">log In</NavLink>
          <NavLink to="/products" className="nav-item">home</NavLink>
          <NavLink to="/myProducts" className="nav-item">my Products</NavLink>
          <NavLink to="/add" className="nav-item">add a product</NavLink>
        </div>
      </div>
      {/* <LogIn /> */}

    </>
  );
};

export default navigation;
