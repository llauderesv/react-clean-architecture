import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router';
// Pages
import Home from './pages/Site/Home';
import Courses from './pages/Site/Courses';
import About from './pages/Site/About';
import LMS from './pages/Site/Lms';
import TeachAtPisara from './pages/Site/TeachAtPisara';
import Help from './pages/Site/Help';
import SignOrSignUp from './pages/Site/SignInOrSignUp';

import Learner from './pages/Learner';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/about' component={About} />
        <Route exact path='/lms' component={LMS} />
        <Route exact path='/teach-at-pisara' component={TeachAtPisara} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/sign-in-or-sign-up' component={SignOrSignUp} />

        <Route path='/learner' component={Learner} />
      </Switch>
    </Router>
  );
};

export default App;
