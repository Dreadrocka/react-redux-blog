import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import history from "./history";
import { Router } from "react-router-dom";

// import the App component
import App from "./App";

// import redux
import { createStore } from "redux";

// import react-redux
import { Provider } from "react-redux";

// import data
import Reducer from "./data/Reducer";
import Initial from "./data/Initial";

const store = createStore(
  Reducer,
  Initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
