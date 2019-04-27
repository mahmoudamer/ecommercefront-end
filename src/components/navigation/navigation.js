import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';




const navigation = (props) => {


  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userid')
    localStorage.removeItem('userName')
    localStorage.removeItem('password')
    window.location.replace('/login')
  }

  let toggleClass = localStorage.getItem('token') ? "nav-item-first" : "nav-item";  // to be modified


  return (
    <>

      <div className="nav-container">
        <div className="nav-navigation">
          {localStorage.getItem('token') ?                                                     // to be modified
            <div className={toggleClass}>
              <span>
                <span className="welcome" >welcome </span>
                <span className='user'> {localStorage.getItem('userName')}</span>
              </span>
            </div>
            : <NavLink className='nav-item ' to="/login">sign In/Up</NavLink>}
          <NavLink
            to="/products"
            onClick={props.getAllProducts}
            className="nav-item">products</NavLink>
          <NavLink to="/add" className="nav-item">add a product</NavLink>
          <span

            onClick={logout}
            className="nav-item cursor">log out</span>
        </div>
      </div>
      {/* <LogIn /> */}

    </>
  );
};

export default navigation;
