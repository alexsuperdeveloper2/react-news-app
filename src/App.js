import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home.js'
import News from './pages/News.js'
import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'
import Analysis from './pages/Analysis.js'
import AboutUs from './pages/AboutUs.js'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/news">
          <Header />
            <News/>
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/about">
          <Header />
          <AboutUs />
        </Route>
        <Route path="/analysis">
          <Header />
          <Analysis />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
