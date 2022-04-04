import React from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './views/Register';
import Login from './views/Login';
import Users from './views/Admin/Users';
import Booking from './views/Admin/Booking';
import Avis from './views/Admin/Avis';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/users' component={Users} />
          <Route path='/booking' component={Booking} />
          <Route path='/avis' component={Avis} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;