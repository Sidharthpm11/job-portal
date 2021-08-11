import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppContext from "./core/AppContext";
import ProtectedRouter from "./core/ProtectedRouter";

function App() {
  const Home = React.lazy(() => import("./containers/Home/Home"));
  const Login = React.lazy(() => import("./containers/Login/Login"));
  const JobDetails = React.lazy(() =>
    import("./containers/JobDetails/JobDetails")
  );

  return (
    <BrowserRouter>
      <AppContext>
        <div className="App-root">
          <CssBaseline />
          <Header />
          <Suspense fallback={<h2>Loading....</h2>}>
            <Switch>
              <ProtectedRouter exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <ProtectedRouter path="/job/:id" component={JobDetails} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Suspense>
        </div>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
