import {useEffect} from 'react';
import {useCallback, useMemo, useReducer, useRef, useState} from 'react';

let globaState = null;

export const setGlobalState = (value) => {
  globaState = value;
};

export const getGlobalState = () => globaState;

// import {thunkMiddleware} from '@/libs/reducerContextHelper';

/**
 *
 * @param {useReducer} reducer useReducer from react
 * @param {*} initState state
 * @param {*} initializer
 * @param {*} middlewares
 * @returns
 *
 * @link https://transang.me/get-state-callback-with-usereducer-in-react/
 */
function useEnhancedReducer(reducer, initState, initializer, middlewares = []) {
  const lastState = useRef(initState);

  const getState = useCallback(() => lastState.current, []);

  // to prevent reducer called twice, per: https://github.com/facebook/react/issues/16295
  // eslint-disable-next-line no-return-assign
  const enhancedReducer = useRef((state, action) => (lastState.current = reducer(state, action))).current;

  const [state, dispatch] = useReducer(enhancedReducer, initState, initializer);

  const middlewaresRef = useRef(middlewares);

  const enhancedDispatch = useMemo(
    () =>
      middlewaresRef.current.reduceRight(
        (acc, mdw) => (action) => mdw()(getState)(acc)(action), // state
        // eslint-disable-next-line react-hooks/rules-of-hooks
        dispatch
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const useSelectorCb = useCallback((selector) => selector(getState()), [getState]);
  console.info({useSelectorCb});

  return [state, enhancedDispatch, getState, useSelectorCb];
}

export default useEnhancedReducer;

export const useSelect = (state) => {
  const selected = useRef([]);
  const useSelector = useCallback(
    (selector) => {
      const value = selector(state);
      console.info({selector, state, value});
      selected.current = value;
      return value;
    },
    [state]
  );
  return useSelector;
};

export {globaState};
