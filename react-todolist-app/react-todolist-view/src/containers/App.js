import React, { Component } from 'react';
import '../App.css';

import Header from '../components/Header';
import Nav from '../components/Nav';
import ItemsList from '../components/ItemsList';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <section className='panel'>
        <Header />
        <Nav/>
        <ItemsList/>
        <Footer/>
      </section>
    );
  }
}

export default App;
