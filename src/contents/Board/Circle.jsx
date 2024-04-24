import PropTypes from 'prop-types';
import React from 'react';
import styles from './Circle.module.scss';

const Circle = ({row, col, id}) => {
  return (
    <div className={styles.squareContainer}>
      <div>{id}</div>
    </div>
  );
};

Circle.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
  id: PropTypes.string,
};

Circle.defaultProps = {
  row: 1,
  col: 1,
  id: 'A1',
};

export default Circle;
