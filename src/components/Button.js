import React from 'react';
import withTheme from '../hoc/withTheme';

const Button = ({ classNames, children, ...restProps }) => {
  const className = ['btn', classNames].join(' ');

  return (
    <button className={className} type="button" {...restProps}>
      {children}
    </button>
  );
};

export default withTheme(Button);
