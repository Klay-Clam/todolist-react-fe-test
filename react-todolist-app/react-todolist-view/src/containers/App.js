import React, { Component } from 'react';
import '../style/App.css';

import Header from '../components/Header';
import Nav from '../components/Nav';
import ItemsList from '../components/ItemsList';
import Footer from '../components/Footer';
import Log from '../components/Log';

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
      search:'',

    };

    //Bind context

  }

  render() {
    return (
      <section className='panel'>
        <Header/>
        <Nav/>
        <ItemsList/>
        <Footer/>
      </section>
    );
  }
}

export default App;
