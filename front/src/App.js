import React, { useEffect } from 'react';
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
import axios from 'axios'
function App() {



  useEffect(() => {
    /* fetch('https://api.voyages2000.com.tn/hotels/availability?cityId=3&city=Hammamet&hotelId&checkIn=2022-04-02&checkOut=2022-04-09&pax=2')
      .then(res => {
        console.log(res);
      }) */
      
      async function postData(url = 'https://api.voyages2000.com.tn/hotels/availability?cityId=3&city=Hammamet&hotelId&checkIn=2022-04-02&checkOut=2022-04-09&pax=2', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
      postData()
  }, [])


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