import React, { Component } from 'react';
import '../style/App.css';

import Header from '../components/Header';
import Nav from '../components/Nav';
import ItemsList from '../components/ItemsList';
import Footer from '../components/Footer';
// import Log from '../components/Log';

// utils
import {isBlank,removeSpaces} from '../utils/IsBlank';
// import Filter from '../utils/Filter';

// store
import {storeGet,storeSave} from '../store/Store';
class App extends Component {
  constructor(props){
    super(props);

    // state
    this.state = {
      username: 'visitor',
      showFinished:false,
      showTodayPlan:false,
      undone: 0,
    };

    //Bind context
    this.handleShowFinishedItem = this.handleShowFinishedItem.bind(this);
    this.handleShowTodayPlaned = this.handleShowTodayPlaned.bind(this);
  }

  handleGetUsername(){

  }

  handleShowFinishedItem(event){
    console.log('show items which finished');
  }

  handleShowTodayPlaned(event){
    console.log('show itemslist which today planed');
  }

  render() {
    return (
      <section className='panel'>
        <Header username={this.state.username}/>
        <Nav undone={this.state.undone}/>
        <ItemsList username={this.state.username}/>
        <Footer 
          handleShowFinishedItem={this.handleShowFinishedItem} 
          handleShowTodayPlaned={this.handleShowTodayPlaned}
        />
      </section>
    );
  }
}

export default App;
