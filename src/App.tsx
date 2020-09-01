import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./view/pages/MainPage";

const  App = () => {
  return (
    <div className="main">
        <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
