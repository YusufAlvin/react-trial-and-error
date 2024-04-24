import React, {useEffect, useRef} from 'react';

export const useCountPlusFive = (count = 0) => {
  const [state, setState] = React.useState(count);

  const changeState = (value) => {
    setState(value + 5);
  };

  return [state, changeState];
};

export const useLoggingState = (initialState, componentName) => {
  const [state, setState] = React.useState(initialState);
  const prevStateRef = useRef(process.env.NODE_ENV === 'development' ? initialState : null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      prevStateRef.current = state;
    }
  }, [state]);

  if (process.env.NODE_ENV === 'development') {
    console.log(`${componentName} prev state: `, prevStateRef.current);
    console.log(`${componentName} next state:`, state);
  }

  return [state, setState];
};
