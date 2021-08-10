import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import JobDetails from "./containers/JobDetails/JobDetails";
import AppContext from "./core/AppContext";
import Login from "./containers/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <div className="App-root">
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/job/:id" component={JobDetails} />
          </Switch>
        </div>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
