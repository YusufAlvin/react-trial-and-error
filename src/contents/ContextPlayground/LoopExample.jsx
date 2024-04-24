import React from 'react';
import {useAppDispatch, useAppState} from './context';
import {setItems} from './actions';
import LoopItem from './LoopItem';

const LoopExample = () => {
  const items = useAppState((state) => state.items);
  const dispatch = useAppDispatch();

  const generateItems = () => {
    const data = [];
    for (let index = 0; index < 10; index++) {
      data.push({
        id: index,
        title: `item ${index + 1}`,
        isSelected: false,
      });
    }
    return data;
  };

  if (items.length === 0) {
    dispatch(setItems(generateItems()));
  }

  return (
    <div className="loop-example--container">
      {items.length > 0 ? (
        <>
          {items.map((item) => {
            return (
              <LoopItem key={`loop-item-${item.id}`} id={item.id} title={item.title} isSelected={item.isSelected} />
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

LoopExample.propTypes = {};

LoopExample.defaultProps = {};

export default LoopExample;
