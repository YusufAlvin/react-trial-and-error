import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@mui/material/TableCell';
import styles from './SortHeader.module.scss';

const SortHeader = ({children}) => {
  return (
    <TableCell>
      <div className={styles.container}>
        <div className={styles.text}>{children}</div>
        <div>aa</div>
      </div>
    </TableCell>
  );
};

SortHeader.propTypes = {
  children: PropTypes.node,
};

SortHeader.defaultProps = {
  children: 'Sort Column',
};

export default SortHeader;
