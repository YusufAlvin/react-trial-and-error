import {createContext, useContext, useMemo} from 'react';
import dispatchHelper from './dispatchHelper';

export const AppContext = createContext({});
export const AppDispatch = createContext({});

export const useAppState = (selector) => {
  const appState = useContext(AppContext);
  let selectedState = appState;
  if (selector) {
    selectedState = selector(appState);
  }
  return useMemo(() => selectedState, [selectedState]);
};
export const useAppDispatch = () => {
  const context = useContext(AppDispatch);
  const state = useAppState();
  const dispatch = dispatchHelper(context, state);
  return dispatch;
};
