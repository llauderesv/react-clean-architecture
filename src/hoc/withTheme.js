import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext';

const withTheme = BaseComponent => props => {
  const {
    theme: {background, foreground},
  } = useContext(ThemeContext);

  return (
    <BaseComponent
      style={{backgroundColor: background, color: foreground}}
      {...props}
    />
  );
};

withTheme.propTypes = {
  BaseComponent: PropTypes.element,
};

export default withTheme;
