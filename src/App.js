import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AuthProvider } from './components/Auth'
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile'
import PrivateRoute from './components/PrivateRoute' 

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
            <Switch>
            <PrivateRoute exact path="/" component={Home} componentProps={{ message:"Hello from the home page!" }} /> { /*NEW!*/ }
            <PrivateRoute path="/user/:userId" component={UserProfile} componentProps={{ profileText:"Welcome to your profile" }} /> { /*NEW!*/ }
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/signup" component={SignUp} /> 
            </Switch> 
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;