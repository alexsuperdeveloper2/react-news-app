import React , {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home.js'
import News from './pages/News.js'
import SignIn from './pages/SignIn.js'
import Analysis from './pages/Analysis.js'
import AboutUs from './pages/AboutUs.js'
import FormSignUp from "./pages/FormSignUp";
import {Provider } from 'react-redux'
import store from './redux/store.js'
import Search from "./pages/Search";
import {auth} from './firebase'
import Profile from "./pages/Profile";
import Sidebar from './pages/Sidebar'




const App = () => {
  const [user , setUser] = useState([])

  auth.onAuthStateChanged (authUser => {
      if(authUser){
        setUser(authUser)
      }else{
        setUser(false)
      }
  })

  return (
    <Router>
      <Provider store={store}>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
         <FormSignUp/>
        </Route>
        <Route path="/news">
          <Header />
            <News/>
        </Route>
        <Route exact path="/">
          <Header />
          <Search/>
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
        <Route path="/profile">
          <Profile user={user}/>
          <Sidebar user={user} />
          <Route path='/profile/news' component={News} />
          <Analysis/>
        </Route>
        
      </Switch>
      </Provider>
    </Router>
  );
};

export default App;
