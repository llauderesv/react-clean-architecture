import React from 'react';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div style={{marginLeft: '50px'}}>{children}</div>
    </div>
  );
};

export default Layout;
