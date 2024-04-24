// import PropTypes from 'prop-types';
import React from 'react';
import styles from './Board.module.scss';

const generateSquare = () => {
  const rows = 3;
  const cols = 2;
  const squares = [];

  for (let row = 0; row < rows; row++) {
    for (let col = cols - 1; col >= 0; col--) {
      const id = `${String.fromCharCode(64 + col + 1)}${row + 1}`;
      squares.push({
        col,
        row,
        id,
      });
    }
  }

  return squares;
};

const Board = () => {
  const squares = generateSquare();

  console.log('squares', squares);

  return (
    <div className={styles.boardContainer1}>
      <div className={styles.boardContainer2}>
        <div className={styles.col1}>
          <div className={styles.topIndexesContainer}>top</div>
          <div className={styles.circlesContainer}>circles</div>
        </div>
        <div className={styles.col2}>
          <div className={styles.rightIndexesContainer}>1</div>
        </div>
      </div>
      {/* {squares.map((s) => (
        <Circle key={`square-${s.id}`} col={s.col} row={s.row} id={s.id} />
      ))} */}
    </div>
  );
};

Board.propTypes = {};

Board.defaultProps = {};

export default Board;
