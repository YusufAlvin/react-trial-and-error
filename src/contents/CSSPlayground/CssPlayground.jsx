import React from 'react';
import ComponentA from './ComponentA';
import './CssPlayground.scss';

const CssPlayground = () => {
  return (
    <div className="parent">
      <div className="container">
        <div className="row-1">Box 1</div>
        <div className="row-2">
          <ComponentA />
        </div>
      </div>
    </div>
  );
};

export default CssPlayground;
