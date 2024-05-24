import React, {memo} from 'react';
import {setItems} from './reducer/actions';
import LoopItem from './LoopItem';
import useStateSelector from './reducer/useContextSelector';
import {useAppDispatch} from './context/contextWithUseContextSelector';

const LoopExample = () => {
  console.log('LoopExample');
  const itemIds = useStateSelector((state) => state.items.map((item) => item.id));
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

  if (itemIds?.length === 0) {
    dispatch(setItems(generateItems()));
  }

  return (
    <div className="loop-example--container">
      {itemIds.length > 0 ? (
        <>
          {itemIds.map((id) => {
            return <LoopItem key={`loop-item-${id}`} id={id} />;
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

export default memo(LoopExample);
