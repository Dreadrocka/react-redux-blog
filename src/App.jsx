import React from "react";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";

import Articles from "./containers/articles/Articles";
import Article from "./containers/articles/Article";
import Add from "./components/Articles/Add";

const App = () => (
  <React.Fragment>
    {/* header should show on all pages */}
    <Header subtitle="Very insightful">My Blog</Header>

    {/* route switch, to handle 404s */}
    <Switch>
      {/* the articles list */}
      {/* use Object.values() to pass in an array of articles that we can map over */}
      <Route exact path="/" component={Articles} /> />
      {/* show the add form - has to come before :id so "add" doesn't get treated as an id  */}
      <Route exact path="/articles/add" component={Add} />
      {/* show an individual article */}
      {/* pass through the id to the container */}
      {/* make sure it's a number with `+` */}
      <Route
        exact
        path="/articles/:id"
        render={({ match }) => <Article id={+match.params.id} />}
      />
      {/* 404 page */}
      <Route component={FourOhFour} />
    </Switch>
  </React.Fragment>
);

export default App;
