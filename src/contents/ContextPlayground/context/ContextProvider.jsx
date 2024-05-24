import PropTypes from 'prop-types';
import React from 'react';
import appStateReducer, {initialState} from '../reducer/reducer';
import {AppDispatch, AppSelector} from './context';
import useEnhancedReducer from '../reducer/useEnhancedReducer';
import {thunkMiddleware} from '../reducer/reducerContextHelper';

const ContextProvider = ({children}) => {
  const [state, contextDispatch, , selectorCb] = useEnhancedReducer(appStateReducer, initialState, undefined, [
    thunkMiddleware,
  ]);
  return (
    <AppDispatch.Provider value={contextDispatch}>
      <AppSelector.Provider value={selectorCb}>{children}</AppSelector.Provider>
    </AppDispatch.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

ContextProvider.defaultProps = {};

export default ContextProvider;
