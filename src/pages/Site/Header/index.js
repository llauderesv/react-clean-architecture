import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

const Header = () => {
  return (
    <ul className='site-header'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/courses'>Courses</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/lms'>LMS</Link>
      </li>
      <li>
        <Link to='/teach-at-pisara'>Teach at pisara</Link>
      </li>
      <li>
        <Link to='/help'>Help</Link>
      </li>
      <li>
        <Link to='/sign-in-or-sign-up'>Sign-In / Sign-Up</Link>
      </li>
    </ul>
  );
};

export default Header;
