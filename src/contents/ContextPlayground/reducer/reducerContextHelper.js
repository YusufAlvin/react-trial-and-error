export const thunk = (getState) => (dispatch) => (action) => {
  if (typeof action === 'function') {
    // If action is a function, call it with dispatch
    action(dispatch, getState);
  } else {
    // Otherwise, dispatch the plain action object
    dispatch(action);
  }
};

export const logger = (prevState, action, nextState, logName = 'Logger') => {
  console.group(`%c action [${logName}]`, 'color: coral; font-weight: thin;', `${action.type}`);
  console.log('%c prev state ', 'color: olivedrab; font-weight: bold;', prevState);
  console.log('%c action     ', 'color: dodgerblue; font-weight: bold;', action);
  console.log('%c next state ', 'color: lightseagreen; font-weight: bold;', nextState);
  console.groupEnd();
};

// eslint-disable-next-line no-unused-vars
export const logMiddleware = (reducerName) => (state) => (getState) => (next) => (action) => {
  console.group(`%c action [${reducerName}]`, 'color: coral; font-weight: thin;', `${action.type}`);
  console.log('%c prev state ', 'color: olivedrab; font-weight: bold;', getState());
  console.log('%c action     ', 'color: dodgerblue; font-weight: bold;', action);
  next(action);
  // *NOTE*: because `dispatch(action)`` is not synchronous. it does not gurantee that this getState() call return the value after the action is applied.
  console.log('%c next state ', 'color: lightseagreen; font-weight: bold;', getState());
  console.groupEnd();
};

export const thunkMiddleware = () => (getState) => (dispatch) => (action) => {
  // console.group(`%c action [${reducerName}]`, 'color: coral; font-weight: thin;', `${action.type}`);
  // console.log('%c prev state ', 'color: olivedrab; font-weight: bold;', getState());
  // console.log('%c action     ', 'color: dodgerblue; font-weight: bold;', action);
  if (typeof action === 'function') {
    // If action is a function, call it with dispatch
    action(dispatch, getState);
  } else {
    // Otherwise, dispatch the plain action object
    dispatch(action);
  }
  // *NOTE*: because `dispatch(action)`` is not synchronous. it does not gurantee that this getState() call return the value after the action is applied.
  // console.log('%c next state ', 'color: lightseagreen; font-weight: bold;', getState());
  // console.groupEnd();
};

/**
 * Creates a higher-order reducer function that logs state transitions for use with React's `useReducer` hook.
 *
 * @param {Object} initialState The initial state of the application.
 * @returns {Function} A higher-order reducer function compatible with `useReducer`.
 *
 * @example
 * // Define your reducer function
 * const reducer = (state, action) => {
 *   switch (action.type) {
 *     case 'INCREMENT':
 *       return { ...state, count: state.count + 1 };
 *     case 'DECREMENT':
 *       return { ...state, count: state.count - 1 };
 *     default:
 *       return state;
 *   }
 * };
 *
 * // Use `useReducer` with the enhanced reducer
 * const [state, dispatch] = useReducer(enhancedReducer(reducer), initialState);
 */
// export const enhanceReducer =
//   (state, action) =>
//   /**
//    * Wrapped reducer function that logs state transitions and applies the specified reducer.
//    *
//    * @param {Object} state The current state of the application.
//    * @param {Object} action The action object that describes the state transition.
//    * @returns {Object} The next state after applying the reducer.
//    */
//   (reducer) => {
//     const nextState = reducer(state, action);
//     logger(state, action, nextState, reducerName);
//     return nextState;
//   };
export const enhanceReducer = (reducer, excludeLogActionTypes = [], cb = null) => {
  /**
   * Wrapped reducer function that logs state transitions and applies the specified reducer.
   *
   * @param {Object} state The current state of the application.
   * @param {Object} action The action object that describes the state transition.
   * @returns {Object} The next state after applying the reducer.
   */
  const handleReducer = (state, action) => {
    const nextState = reducer(state, action);
    if (!excludeLogActionTypes.includes(action.type)) logger(state, action, nextState, reducer.name);
    if (cb) cb(nextState);
    return nextState;
  };
  return handleReducer;
};

export const useEnhancedDispatchContext = (state, dispatch) => {
  const _dispatch = thunk(state)(dispatch);
  return _dispatch;
};
