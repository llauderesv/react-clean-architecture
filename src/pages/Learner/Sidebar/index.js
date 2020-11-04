import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='learner-side-bar'>
        <li>
          <Link to='/learner/home'>Home</Link>
        </li>
        <li>
          <Link to='/learner/my-courses'>My Courses</Link>
        </li>
        <li>
          <Link to='/learner/schedule-management'>Schedule Management</Link>
        </li>
        <li>
          <Link to='/learner/materials'>Materials</Link>
        </li>
        <li>
          <Link to='/learner/evaluation'>Evaluation</Link>
        </li>
        <li>
          <Link to='/learner/report'>Report</Link>
        </li>
        <li>
          <Link to='/learner/grades-certificates'>Grades & Certificates</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
