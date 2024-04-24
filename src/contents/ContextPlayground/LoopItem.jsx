import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {useAppDispatch} from './context';
import {setItemSelected} from './actions';

const LoopItem = ({isSelected, id, title}) => {
  console.log(`LoopItem title ${title} is rendering`);
  const dispatch = useAppDispatch();

  const onSelectedClickHandler = () => {
    dispatch(setItemSelected(id, !isSelected));
  };

  return (
    <div
      id={id}
      className={`loop-item-container ${isSelected ? 'loop-item-container-selected' : ''}`}
      onClick={onSelectedClickHandler}
    >
      <>{title}</>
    </div>
  );
};

LoopItem.propTypes = {
  id: PropTypes.any,
  isSelected: PropTypes.bool,
  title: PropTypes.string,
};

LoopItem.defaultProps = {
  isSelected: false,
  id: 0,
  title: '',
};

export default memo(LoopItem);
