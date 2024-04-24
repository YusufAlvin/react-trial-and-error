import React from 'react';
import './HocRedux.scss';
import {show} from '../../stores/actions/appStateAction';
import Wrapper from './Wrapper';

const selectors = [
  (useSelector) => ({
    data: useSelector((s) => s.appState.hide),
  }),
];

const actions = {
  show: () => (dispatch) => {
    dispatch(show());
  },
};

const HocRedux = ({data, show}) => {
  const onClickHandler = () => {
    show();
  };

  return (
    <div className="hoc-redux-container">
      <buton onClick={onClickHandler} />
      {data}
    </div>
  );
};

const HocReduxComponent = Wrapper(HocRedux, selectors, actions);

export default HocReduxComponent;
