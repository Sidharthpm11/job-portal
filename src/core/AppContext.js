import React, { Component, useContext, useState } from "react";

const testContext = React.createContext(true);

export const useAppcontext = () => useContext(testContext);

export default function AppContext(props) {
  const initialState = {
    title: "",
    showHeader: true,
    isLoggdin: false,
    setTitle: (title) => {
      setstate({ ...state, title: title });
    },
    setHeader: (show) => {
      setstate({ ...state, showHeader: show });
    },
    setLoggedin: (show) => {
      setstate({ ...state, isLoggdin: show });
    },
  };
  const [state, setstate] = useState(initialState);
  return (
    <testContext.Provider value={state}>{props.children}</testContext.Provider>
  );
}

export const withContext = (OrgComponent) => {
  class newComponent extends Component {
    render() {
      return (
        <testContext.Consumer>
          {(isLoggedin) => (
            <OrgComponent {...this.props} context={isLoggedin} />
          )}
        </testContext.Consumer>
      );
    }
  }
  return newComponent;
};
