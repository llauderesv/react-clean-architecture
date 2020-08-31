import React from 'react';
import withTheme from '../hoc/withTheme';

/**
 * React Base Button Component...
 *
 */
const Button = ({ classNames, children, ...restProps }) => {
  const className = ['btn', classNames].join(' ');

  return (
    <button className={className} type="button" {...restProps}>
      {children}
    </button>
  );
};

export default withTheme(Button);
