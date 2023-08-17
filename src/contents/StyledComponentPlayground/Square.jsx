import React from 'react';
import {SquareEl} from './styles';

const Square = ({bgColor, onClick}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <SquareEl bgColor={bgColor} onClick={handleClick}>
      <></>
    </SquareEl>
  );
};

export default Square;
