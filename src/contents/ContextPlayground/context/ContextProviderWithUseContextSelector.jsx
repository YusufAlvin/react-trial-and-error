import PropTypes from 'prop-types';
import React, {useReducer} from 'react';
import {AppContextProvider, AppDispatchProvider} from './contextWithUseContextSelector';
import appStateReducer, {initialState} from '../reducer/reducer';

const ContextProviderWithUseContextSelector = ({children}) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  return (
    <AppContextProvider value={state}>
      <AppDispatchProvider value={dispatch}>{children}</AppDispatchProvider>
    </AppContextProvider>
  );
};

ContextProviderWithUseContextSelector.propTypes = {
  children: PropTypes.node.isRequired,
};

ContextProviderWithUseContextSelector.defaultProps = {};

export default ContextProviderWithUseContextSelector;
