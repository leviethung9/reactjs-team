import React from "react";
import Mainlayout from "./components/layouts/MainLayout.js";
import Home from "./pages/home";
import Cart from "./pages/cart/index.js";
import Course from "./pages/Course/index.js";
import Contact from "./pages/contact/index.js";
import Blog from "./pages/blog/index.js";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./pages/details/index.js";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Mainlayout>
          <Switch>
            <Route exact path="/course" component={Home} />
            <Route
              path="/product/:id"
              render={(match) => <Detail match={match} />}
            />
            <Route path="/cart"><Cart />
            </Route>
            <Route  path="/contact" component={Contact} />
            <Route  path="/blog" component={Blog} />


          </Switch>
        </Mainlayout>
      </Switch>
    </Router>
  );
};
export default Routes;
