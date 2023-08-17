import React from 'react';
import {generateUniqueKey} from '../../libs/generateKey';
import './GenerateKeyExample.scss';

const GenerateKeyExample = () => {
  const generateDummyData = () => {
    const data = [];

    for (let i = 0; i < 10; i++) {
      data.push(i);
    }

    return data;
  };

  return (
    <div className="generate-key-example-container">
      {generateDummyData().map((d) => {
        const key = generateUniqueKey('example-key');

        return (
          <div key={key} className="generate-key-example-item">
            {key}
          </div>
        );
      })}
    </div>
  );
};

export default GenerateKeyExample;
