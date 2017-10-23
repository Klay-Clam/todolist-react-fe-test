import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {isToggleOn: true};
  //   this.openUserBan = this.openUserBan.bind(this);
  // }
  // openUserBan() {
  //   console.log('打开左侧的用户面板');
  // }
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <a href="#"><img src=''/></a>
        </header>
        <input type='text' className=''/>
        <button id='createItems'>new</button>
      </div>
    );
  }
}

export default App;
