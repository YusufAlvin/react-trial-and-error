import React from 'react';
import './GridExample.scss';
import {generateUniqueKey} from '../../libs/generateKey';

const GridExample = () => {
  const genereateDummyData = () => {
    const data = [];

    for (let index = 0; index < 10; index++) {
      data.push(index);
    }

    return data;
  };

  return (
    <div className="grid-example">
      {genereateDummyData().map(() => {
        const key = generateUniqueKey('grid-example-item');
        return (
          <div key={key} className="grid-example-item">
            <></>
          </div>
        );
      })}
    </div>
  );
};

export default GridExample;
