import React from 'react';
import Counter from './Counter';
import ContextProviderWithUseContextSelector from './context/ContextProviderWithUseContextSelector';
import LoopExample from './LoopExample';
import './ContextPlayground.scss';

const ContextPlayground = () => {
  return (
    <ContextProviderWithUseContextSelector>
      <div className="context-playground--container">
        <Counter />
        <LoopExample />
      </div>
    </ContextProviderWithUseContextSelector>
  );
};

ContextPlayground.propTypes = {};

ContextPlayground.defaultProps = {};

export default ContextPlayground;
