import React from 'react';
import useStateSelector from './reducer/useContextSelector';
import {useAppDispatch} from './context/contextWithUseContextSelector';
import {setCounter} from './reducer/actions';
import './Counter.scss';

const Counter = () => {
  console.log('Counter is rendering');
  const counter = useStateSelector((state) => state.counter);
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
