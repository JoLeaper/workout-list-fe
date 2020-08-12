import React from 'react';
import WorkoutPage  from '../WorkoutPage/WorkoutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../Header/Header';
import Signup from '../auth/Signup/Signup';
import Login from '../auth/Login/Login';
import PrivateRoute from '../auth/PrivateRoute/PrivateRoute';

export default function App() {  
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/workouts" component={WorkoutPage}/>
      </Switch>    
    </Router>
  );
}
  
