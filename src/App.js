import React from 'react';
import './App.scss';
import Labware from './components/Labware/Labware';
import GridExample from './contents/GridExample/GridExample';

const App = () => {
  return (
    <div className='app-container'>
      <Labware />
      {/* <GridExample /> */}
    </div>
  )
};

export default App;
