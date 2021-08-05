import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App-root">
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
