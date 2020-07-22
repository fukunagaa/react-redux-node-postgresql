  import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favorites";
import TodoApp from "./components/todo/TodoApp";
import Settings from "./components/settings/Settings"

const app = document.getElementById("app");

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Home}></Route>
      <Route path="/todos/:article" component={TodoApp}></Route>
      <Route path="/favorites/:article" component={Favorites}></Route>
      <Route path="/settings/:mode(main|extra)" component={Settings}></Route>
    </Layout>
  </Router>,
  app
);