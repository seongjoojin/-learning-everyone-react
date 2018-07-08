import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  state = {
    name:'',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  render() {
    return (
      <from>
        <input 
          name="name"
          placeholder="이름" 
          onChange={this.handleChange} 
          value={this.state.name} />
        <input 
          name="phone"
          placeholder="전화번호" 
          onChange={this.handleChange}
          value={this.state.phone} />
        <div>
          {this.state.name}<br />
          {this.state.phone}
        </div>
      </from>
    );
  }
}

export default App;
