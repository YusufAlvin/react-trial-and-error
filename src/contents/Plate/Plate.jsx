import React from 'react';
import styles from './Plate.module.scss';
import Well from './Well';
import WellDiv from './WellDiv';

const Plate = () => {
  const wells = [];

  for (let i = 0; i < 384; i++) {
    const x = 3 * 2;
    const y = 5;

    wells.push(<Well cx={x} cy={y} number={i + 1} />);
  }

  return <div className={styles.container}>{wells}</div>;
};

export default Plate;
