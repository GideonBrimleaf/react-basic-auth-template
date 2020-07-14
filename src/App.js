import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AuthProvider } from './components/Auth'
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
            <Switch>
            <Route exact path="/" render={() => <Home message="Hello from the home page!" />} />
            <Route path="/user/:userId" render={(matchProps) => <UserProfile {...matchProps} profileText="Welcome to your profile" />} />
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/signup" component={SignUp} /> 
            </Switch> 
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;