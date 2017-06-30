import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';
import {Actions} from './Actions';
import {Store} from './Store';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: Store.getAll()
    }
  }
  createNewItem = ()=>{
    Actions.addNewItem('new item');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={this.createNewItem} items={this.state.items} />
      </div>
    );
  }
}

export default App;
