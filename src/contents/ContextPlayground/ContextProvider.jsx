import PropTypes from 'prop-types';
import React, {useReducer} from 'react';
import appStateReducer, {initialState} from './reducer';
import {AppContext, AppDispatch} from './context';

const ContextProvider = ({children}) => {
  const [state, reducer] = useReducer(appStateReducer, initialState);
  return (
    <AppContext.Provider value={state}>
      <AppDispatch.Provider value={reducer}>{children}</AppDispatch.Provider>
    </AppContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

ContextProvider.defaultProps = {};

export default ContextProvider;
