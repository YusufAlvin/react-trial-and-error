import {createContext, useContextSelector} from '@fluentui/react-context-selector';
import dispatchHelper from '../reducer/dispatchHelper';

export const AppContext = createContext({});
export const AppDispatch = createContext({});
export const AppContextProvider = AppContext.Provider;
export const AppDispatchProvider = AppDispatch.Provider;

// export const useAppDispatch = () => {
//   const context = useContextSelector(AppDispatch, (context) => context);
//   const state = useContextSelector(AppContext, (context) => context);
//   const dispatch = dispatchHelper(context, state);
//   return dispatch;
// };
