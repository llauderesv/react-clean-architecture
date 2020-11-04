import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import Header from './Header';
// Pages
import Home from './Home';
import Courses from './Courses';
import About from './About';
import LMS from './Lms';
import TeachAtPisara from './TeachAtPisara';
import Help from './Help';
import SignOrSignUp from './SignInOrSignUp';

const App = () => {
  return (
    <>
      <Header />
      <div style={{marginLeft: '50px'}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/about' component={About} />
          <Route exact path='/lms' component={LMS} />
          <Route exact path='/teach-at-pisara' component={TeachAtPisara} />
          <Route exact path='/help' component={Help} />
          <Route exact path='/sign-in-or-sign-up' component={SignOrSignUp} />
          <Route render={() => <h1>Page Not found</h1>} />
        </Switch>
      </div>
    </>
  );
};

export default App;
