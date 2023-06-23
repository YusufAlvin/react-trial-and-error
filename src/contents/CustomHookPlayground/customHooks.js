import React from 'react';

export const useCountPlusFive = (count = 0) => {
  const [state, setState] = React.useState(count);

  const changeState = (value) => {
    setState(value + 5);
  };

  return [state, changeState];
};