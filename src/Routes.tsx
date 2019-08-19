import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Header} from "./header";

import {AdminPage} from "./admin-page";
import {ProductsPage} from "./products-page";
import {ProductPage} from "./product-page";
import {NotFoundPage} from "./not-found";
import {LoginPage} from "./login";

export const Routes: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Redirect to="/products" from="/" exact={true}/>
          <Route exact={true} path="/products" component={ProductsPage}/>
          <Route path="/products/:id" component={ProductPage}/>
          <Route path="/admin">
            {loggedIn ? <AdminPage/> : <Redirect to="/login"/>}
          </Route>
          <Route component={NotFoundPage}/>
        </Switch>
        
      </div>
    </Router>
  )
}
