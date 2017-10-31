import React, { Component } from 'react';
import '../style/App.css';

import Header from '../components/Header';
import Nav from '../components/Nav';
import ItemsList from '../components/ItemsList';
import Footer from '../components/Footer';

class TodoApp extends Component {
  constructor(props){
    super(props);
    // filters 
    const filters = {
      ALL:'all',
      COMPLETED:'completed',
      UNCOMPLETED:'uncompleted'
    }
    // Home Status
    const homestatus = {
      HOME: 'home',
      SIGNIN: 'signin',
      SIGNUP: 'signup'
    }
    // state
    this.state = {
      username: 'visitor',
      unfinishedQuantity: 0,
      filter: filters.ALL,
      homestatus: homestatus.HOME
    };

    //Bind context
    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(user){
    this.setState({username:user});
    console.log(`now username is ${this.state.username}`);
  }

  render() {
    return (
      <section className='panel'>
        <Header username={this.state.username}
                getUsername={this.setUsername} />
        <Nav username={this.state.username} />
        <ItemsList username={this.state.username} />
        <Footer username={this.state.username}/>
      </section>
    );
  }
}

TodoApp.defaultProps = {
  username: 'visitor',
  unfinishedQuantity: 0,
}
export default TodoApp;
