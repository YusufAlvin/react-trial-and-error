import React, {useRef} from 'react';
import {SelectableGroup} from 'react-selectable-fast';
import Square from './Square';
import './SelectableFast.scss';

const generateData = () => {
  const data = [];

  for (let i = 1; i <= 10; i += 1) {
    data.push({
      id: i,
    });
  }

  return data;
};

const SelectableFast = () => {
  const initialState = {
    selected: [],
    mousePosition: {x: 0, y: 0},
  };

  // eslint-disable-next-line no-unused-vars
  const [state, setState] = React.useState(initialState);

  const containerRef = useRef(null);

  const handleSelectionClear = (item) => {};

  const handleSelectionFinish = (item) => {
    setState((prevState) => ({
      ...prevState,
      selected: item.map((itm) => ({
        id: itm.props.id,
      })),
    }));
  };

  const handleSelecting = (items) => {
    console.log('items[0]', items[0]);
  };

  return (
    <div ref={containerRef} className="selectablefast-container">
      <SelectableGroup
        className="selectable-container"
        clickClassName="tick"
        resetOnStart
        allowClickWithoutSelected={false}
        duringSelection={handleSelecting}
        onSelectionClear={handleSelectionClear}
        onSelectionFinish={handleSelectionFinish}
      >
        <div className="selectablefast-square-container">
          {generateData().map((data) => (
            <Square key={data.id} id={data.id} />
          ))}
        </div>
      </SelectableGroup>
    </div>
  );
};

export default SelectableFast;
