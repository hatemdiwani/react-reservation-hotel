import React from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './views/Register';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;