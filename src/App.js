import React from 'react';
import './App.scss';
import ClassComponent from './contents/ClassComponent/ClassComponent';

const App = () => {
  return (
    <div className='app-container'>
      <ClassComponent
        title="Pass From Props"
        open
      />
    </div>
  )
};

export default App;
