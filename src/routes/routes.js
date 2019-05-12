import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "../components/products/products";
import Edit from "../components/edit/edit";


const routes = (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/products/:id" component={Edit} />
  </Switch>
);
export default routes;
