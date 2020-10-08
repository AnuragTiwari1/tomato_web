import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home";
import { connect } from "react-redux";
import { Loader } from "../components/Loader";
import { About } from "./about";

function AppRouterComponent(props) {
  return (
    <Router>
      <Switch>
        <Route path="/about/:resId" component={About} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {props.loading && <Loader msg={props.loadingMessage} />}
    </Router>
  );
}

export const AppRouter = connect((state) => ({
  loading: state.appReducer.isLoading,
  loadingMessage: state.appReducer.loadingMessage,
}))(AppRouterComponent);
