import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value:0
  };

  static getDerivedStateFromProps(nextProps,prevState){
    if (prevState.value !== nextProps.value) {
      return {
        value:nextProps.value
      };
    }
    return null
  }

  shouldComponentUpdate(nextProps,prevState){
    if (nextProps.value === 10) return false;
    return true;
  }

  componentDidUpdate(preProp, prevState){
    if (this.props.value !== preProp.value){
      console.log('value 값이 바뀌었다!',this.props.value)
    }
  }

  componentWillUnmount() {
    console.log('Good Bye');
  }

  render() {
    return (
      <div>
          {this.props.missing.something}
          <p>props:{this.props.value}</p>
          <p>state:{this.state.value}</p>
      </div>
    )
  }
}

export default MyComponent;