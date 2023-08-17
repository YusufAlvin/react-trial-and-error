import React from 'react';
import style from './UnitTestPlayground.module.scss';

const UnitTestPlayground = () => {
  const [dataState, setDataState] = React.useState([]);

  // const handleClick = () => {
  //   console.log('aaa');
  // }

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setDataState(json));
  }, []);

  return (
    <div className={style.unitTestPlayground}>
      {/* <button onClick={handleClick}>Button</button> */}
      {dataState.map((d) => (
        <div key={d.id}>{d.body}</div>
      ))}
    </div>
  );
};

export default UnitTestPlayground;
