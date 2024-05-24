const actions = {
  SET_COUNTER: 'SET_COUNTER',
  SET_ITEMS: 'SET_ITEMS',
  SET_ITEM_SELECTED: 'SET_ITEM_SELECTED',
};

export const setCounter = (value) => ({
  type: actions.SET_COUNTER,
  counter: value,
});

export const setItems = (value) => ({
  type: actions.SET_ITEMS,
  items: value,
});

export const setItemSelected = (id, isSelected) => ({
  type: actions.SET_ITEM_SELECTED,
  id: id,
  isSelected: isSelected,
});

export default actions;
