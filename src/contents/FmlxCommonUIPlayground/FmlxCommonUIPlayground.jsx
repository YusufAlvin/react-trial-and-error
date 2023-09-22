// import PropTypes from 'prop-types';
import React from 'react';
import {FmlxTextBox} from 'fmlx-common-ui';
import './FmlxCommonUIPlayground.module.scss';

const FmlxCommonUIPlayground = () => {
  const handleClick = () => {
    window.alert('textbox is cliced');
  };

  return (
    <div>
      <FmlxTextBox mode="password" onClick={handleClick} />
    </div>
  );
};

FmlxCommonUIPlayground.propTypes = {};

FmlxCommonUIPlayground.defaultProps = {};

export default FmlxCommonUIPlayground;
