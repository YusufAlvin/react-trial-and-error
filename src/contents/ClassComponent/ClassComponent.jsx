import React, { createRef } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Child from "./Child";
import * as AppStateAction from '../../stores/actions/appStateAction';
import './ClassComponent.scss';

function mapStateToProps(state, ownProps) {
  return {
    hide: state.appState.hide,
  }
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    appStateAction: bindActionCreators(AppStateAction, dispatch),
  }
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'title',
      open: true,
    }
  }

  inputRef = createRef();

  // for handling network request
  componentDidMount = () => {
    console.log('componentDidMount');
    console.log('this.props.hideLabel :>> ', this.props.hideLabel);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps :>> ', prevProps);
    console.log('prevState :>> ', prevState);
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
    console.log('this.state :>> ', this.state);
  }

  // for updating state based on props
  static getDerivedStateFromProps = (props, state) => {
    const { title } = props;
    return {
      ...state,
      title,
    }
  }

  handleClick = () => {
    const { hide, appStateAction } = this.props;

    if (hide) {
      appStateAction.hide();
    } else {
      appStateAction.show();
    }

    // this.setState({
    //   ...this.state,
    //   open: !this.state.open,
    // });
  }

  handleClick2 = () => {
    this.inputRef.current.focus();
  }

  render() {
    const { title } = this.state;
    const { hide } = this.props;
    console.log('a');
    return (
      <div className="class-component">
        <div className="class-component-title">{hide ? <></> : title}</div>
        {hide ? <></> : <Child />}
        <button onClick={this.handleClick}>Show</button>
        <div>
          <input ref={this.inputRef} />
          <button onClick={this.handleClick2}>Focus the input</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);