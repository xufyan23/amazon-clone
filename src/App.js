
import './App.css';
import {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { useStateValue } from '../src/StateProvider';
import { auth } from '../src/firebase';

function App() {
  //data layer
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  console.log(user)
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header/>
            <Home/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
          <Route path="/login">
            <Login/>
            </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
