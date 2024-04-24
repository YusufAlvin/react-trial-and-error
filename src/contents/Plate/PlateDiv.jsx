import React from 'react';
import styles from './Plate.module.scss';
import WellDiv from './WellDiv';

const PlateDiv = () => {
  const wells = [];

  for (let i = 0; i < 384; i++) {
    wells.push(<WellDiv />);
  }

  return <div className={styles.plateDivContainer}>{wells}</div>;
};

export default PlateDiv;
