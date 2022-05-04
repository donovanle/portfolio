import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MainPage from "./views/MainPage";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
