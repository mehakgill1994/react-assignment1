import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: "Husan"
  }

  nameChangeHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }

  render() {
    return (
      <div className="App">
        <UserOutput username="Mehak" />
        <UserOutput username={this.state.username} />
        <UserInput changeName={this.nameChangeHandler} name={this.state.username}/>
      </div>
    );
  }
}

export default App;
