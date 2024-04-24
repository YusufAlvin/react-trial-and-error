import React from 'react';
import {useAppDispatch, useAppState} from './context';
import {setCounter} from './actions';
import './Counter.scss';

const Counter = () => {
  console.log('counter is rendering');
  const {counter} = useAppState();
  const dispatch = useAppDispatch();

  const onDecrementClickHandler = () => {
    dispatch(setCounter(counter - 1));
  };

  const onIncrementClickHandler = () => {
    dispatch(setCounter(counter + 1));
  };

  return (
    <div className="counter-container">
      <button onClick={onDecrementClickHandler}>-</button>
      <span>{counter}</span>
      <button onClick={onIncrementClickHandler}>+</button>
    </div>
  );
};

Counter.propTypes = {};

Counter.defaultProps = {};

export default Counter;
