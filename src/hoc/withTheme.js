import React from 'react';
import ThemeContext from '../ThemeContext';

const withTheme = (BaseComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme: { background, foreground } }) => (
        <BaseComponent
          style={{ backgroundColor: background, color: foreground }}
          {...props}
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default withTheme;
