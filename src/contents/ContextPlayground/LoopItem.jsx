import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {setItemSelected} from './reducer/actions';
import useStateSelector from './reducer/useContextSelector';
import {useAppDispatch} from './context/contextWithUseContextSelector';

const LoopItem = ({id}) => {
  const item = useStateSelector((state) => state.items.find((item) => item.id === id));
  const dispatch = useAppDispatch();

  console.log(`LoopItem title ${item.title} is rendering`);

  const onSelectedClickHandler = () => {
    dispatch(setItemSelected(id, !item.isSelected));
  };

  return (
    <div
      id={id}
      className={`loop-item-container ${item.isSelected ? 'loop-item-container-selected' : ''}`}
      onClick={onSelectedClickHandler}
    >
      <>{item.title}</>
    </div>
  );
};

LoopItem.propTypes = {
  id: PropTypes.any,
};

LoopItem.defaultProps = {
  id: 1,
};

export default memo(LoopItem);
