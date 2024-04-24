import React from 'react';
import './CustomHookPlayground.scss';
import {useCountPlusFive, useLoggingState} from './customHooks';

const CustomHookPlayground = () => {
  const [count, setCount] = useLoggingState(0, 'CustomHookPlayground');

  const handleClick = () => {
    setCount((prevState) => prevState + 5);
  };

  return (
    <div className="CustomHookPlayground">
      <div className="square">{count}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default CustomHookPlayground;
