import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home";
import { connect } from "react-redux";
import { Loader } from "../components/Loader";

function AppRouterComponent(props) {
  return (
    <Router>
      {props.loading && <Loader msg={props.loadingMessage} />}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export const AppRouter = connect((state) => ({
  loading: state.appReducer.isLoading,
  loadingMessage: state.appReducer.loadingMessage,
}))(AppRouterComponent);

function About() {
  return <h2>About</h2>;
}
