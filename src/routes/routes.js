import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "../components/products/products";
import ProductDetails from "../components/product-details/productDetails";
import AddForm from "../components/add-product/addForm";
import LogIn from "./../components/signIn-up/logIn";
import Register from "./../components/signIn-up/register";


const routes = (
  <Switch>
    <Route exact path="/products" component={Products} />
    <Route exact path="/details" component={ProductDetails} />
    <Route exact path="/add" component={AddForm} />
    <Route exact path="/logIn" component={LogIn} />
    <Route exact path="/register" component={Register} />
  </Switch>
);
export default routes;
