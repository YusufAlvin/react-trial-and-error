import React from "react";

class Child extends React.Component {
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div className="class-component-child">
        Child
      </div>
    )
  }
}

export default Child;