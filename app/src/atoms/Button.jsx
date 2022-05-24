import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

function Button({ className, children, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  onClick: _noop,
};

export default Button;
