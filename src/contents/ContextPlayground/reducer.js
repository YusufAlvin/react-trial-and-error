import actions from './actions';

export const initialState = {
  counter: 0,
  items: [],
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_COUNTER: {
      return {
        ...state,
        counter: action.counter,
      };
    }
    case actions.SET_ITEMS: {
      return {
        ...state,
        items: action.items,
      };
    }
    case actions.SET_ITEM_SELECTED: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              isSelected: action.isSelected,
            };
          }
          return item;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

const appStateReducer = (state, action = {}) => {
  const nextState = rootReducer(state, action);
  console.group(`%c[appState] action`, 'color: grey; font-weight: thin;', `${action.type}`);
  console.log('Previous State:', state);
  console.log('Action:', action);
  console.log('Next State:', nextState);
  console.groupEnd();
  return nextState;
};

export default appStateReducer;
