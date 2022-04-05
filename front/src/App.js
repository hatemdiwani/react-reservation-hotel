import React from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './views/Register';
import Login from './views/Login';
import Users from './views/Admin/Users';
import Booking from './views/Admin/Booking';
import Avis from './views/Admin/Avis';
import Landing from './views/Landing';
import Hotels from './views/Hotels';
import Footer from './layouts/Footer';
import HotelSingle from './views/HotelSingle';
import Profile from './views/Profile';

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
          <Route path='/hotels' component={Hotels} />
          <Route path='/hotel' component={HotelSingle} />
          <Route path='/profile' component={Profile} />
          <Route path='/' component={Landing} />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;