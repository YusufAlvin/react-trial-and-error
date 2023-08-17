import React from 'react';
import './CssPlayground.scss';

const CssPlayground = () => {
  return (
    <div className="cssplayground">
      <div className="item">
        <div className="square"></div>
      </div>
      <div className="item">
        <div className="container">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
};

export default CssPlayground;
