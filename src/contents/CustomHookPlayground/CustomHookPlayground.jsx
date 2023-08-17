import React from 'react';
import './CustomHookPlayground.scss';
import {useCountPlusFive} from './customHooks';

const CustomHookPlayground = () => {
  const [state, changeValue] = useCountPlusFive(0);

  const handleClick = () => {
    changeValue(5);
  };

  return (
    <div className="CustomHookPlayground">
      <div className="square">{state}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default CustomHookPlayground;
