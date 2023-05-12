import PropTypes from 'prop-types';
import React from 'react';
import { createSelectable } from 'react-selectable-fast';

const Square = ({
  selectableRef,
  isSelected,
  id,
}) => {
  return (
    <div 
      ref={selectableRef}
      className={[
        'selectablefast-square',
        isSelected ? 'selectablefast-square-selected' : ''
      ].join(' ')}
    >
      {id}
    </div>
  )
};

Square.propTypes = {
  selectableRef: PropTypes.any.isRequired,
  id: PropTypes.number,
};

Square.defaultProps = {
  id: 0,
};

export default createSelectable(Square);