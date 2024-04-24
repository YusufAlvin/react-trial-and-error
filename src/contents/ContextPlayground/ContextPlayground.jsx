import React from 'react';
import ContextProvider from './ContextProvider';
import Counter from './Counter';
import OtherComponent from './OtherComponent';
import './ContextPlayground.scss';
import LoopExample from './LoopExample';

const ContextPlayground = () => {
  return (
    <ContextProvider>
      <div className="context-playground--container">
        <Counter />
        <OtherComponent />
        <LoopExample />
      </div>
    </ContextProvider>
  );
};

ContextPlayground.propTypes = {};

ContextPlayground.defaultProps = {};

export default ContextPlayground;
