import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Wrapper = (Component, selectors = [], actions = {}) => {
  return function WithRedux(props) {
    const stateProps = selectors.reduce((acc, selectorFn) => {
      return { ...acc, ...selectorFn(useSelector) };
    }, {});

    const dispatchProps = Object.entries(actions).reduce((acc, [actionName, actionFn]) => {
      return {
        ...acc,
        [actionName]: (...args) => useDispatch()(actionFn(...args)),
      };
    }, {});

    return <Component {...props} {...stateProps} {...dispatchProps} />;
  };
};

export default Wrapper;
