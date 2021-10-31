import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import Reviews from "../pages/Reviews";


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/reviews" component={Reviews} />
    </Switch>
  );
}

export default Routes;
