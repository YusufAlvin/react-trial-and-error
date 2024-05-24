import {createContext, useContext, useEffect, useState} from 'react';
import dispatchHelper from '../reducer/dispatchHelper';
import {globaState} from '../reducer/useEnhancedReducer';

export const AppContext = createContext({});
export const AppDispatch = createContext({});
export const AppSelector = createContext({});

export const useAppState = () => useContext(AppContext);
export const useAppDispatch = () => {
  const context = useContext(AppDispatch);
  const state = useAppState();
  const dispatch = dispatchHelper(context, state);
  return dispatch;
};

export const useAppSelector = (selector) => {
  const [selected, setSelected] = useState([]);
  console.log({globalState: globaState});
  useEffect(() => {
    if (globaState) {
      setSelected(selector(globaState));
    }
  }, [selector]);
  return selected;
};
