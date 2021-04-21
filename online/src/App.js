import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login"
import {auth} from "./firebase"
import Payment from "./Payment"
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51I5Cr9CTybATI3LT76OmSgpe3HmhXISEZaCqomP05Xz1EBo7DBwvkHJiUnpVZqO2p3nW0lV0eL1pOntG4gbCQ0zB00bqRhdS1P');

function App() {
const [{}, dispatch] = useStateValue();

useEffect(() => {
    // will only run once when app component loads 
    auth.onAuthStateChanged(authUser => {
      console.log('USER is ',authUser);

      if(authUser){
        //User just logged in/was logged in. No need to login again after refreshing
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      
      }else{
        //User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
}, [])
  


  return (
    <Router>
    <div className="App">
    
      <Switch>

      <Route path="/login">
          
          <Login />
        </Route>

        
        <Route path="/checkout">
        <Header />  
          <Checkout />
        </Route>

        <Route path="/payment">
        <Header />  
            <Elements stripe={promise}> 
            <Payment />
            </Elements>
          
        </Route>

        <Route path="/">
        <Header />
          <Home  />
        </Route>

      </Switch>
      
      
    </div>

    </Router>
  );
}

export default App;
