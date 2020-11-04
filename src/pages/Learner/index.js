import './index.scss';
import React from 'react';
import {Switch, useRouteMatch} from 'react-router-dom';
import {Route} from 'react-router';
import Sidebar from './Sidebar';
// Pages
import Home from './Home';
import MyCourses from './MyCourses';
import ScheduleManagement from './ScheduleManagement';
import Materials from './Materials';
import Evaluation from './Evaluation';
import Report from './Report';
import GradesAndCertificates from './GradesAndCertificates';

const App = () => {
  const {path} = useRouteMatch();

  return (
    <div className='learner-container'>
      <Sidebar />

      <div className='content'>
        <Switch>
          <Route exact path={`${path}`} component={Home} />
          <Route exact path={`${path}/my-courses`} component={MyCourses} />
          <Route exact path={`${path}/schedule-management`} component={ScheduleManagement} />
          <Route exact path={`${path}/materials`} component={Materials} />
          <Route exact path={`${path}/evaluation`} component={Evaluation} />
          <Route exact path={`${path}/report`} component={Report} />
          <Route exact path={`${path}/grades-certificates`} component={GradesAndCertificates} />
          {/* <Route render={() => <h1>Page Not found</h1>} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default App;
