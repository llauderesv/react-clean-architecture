import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Site from './pages/Site';
import Learner from './pages/Learner';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Site} />
        <Route path='/learner' component={Learner} />
        <Route render={() => <h1>Page Not found</h1>} />
        {/* 
        <Route exact path='/instructor' component={} />
        <Route exact path='/learner' component={} /> */}
      </Switch>
    </Router>
  );
};

export default App;
