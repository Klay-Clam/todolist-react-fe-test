import React, { Component } from 'react';
import '../App.css';

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
  constructor(props) {
    super(props);
    this.state = {
      items: storeGet() === null ? [] : storeGet(),
    }
    //Bind context
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(item) {
    function listItem(num, text) {
      return {
        id: num,
        value: removeSpaces(text),
        checked: false
      }
    }

    if (!isBlank(item)) {
      this.setState({ search: '' });
      this.alert("Empty value for item!", true, "error");
    } else {
      let newId = 0;
      let itemsList = this.state.items;

      if (itemsList[itemsList.length - 1] !== undefined) {
        newId = itemsList[itemsList.length - 1].id + 1
      } else {
        newId = 1;
      }

      var newItem = new listItem(newId, item);
      itemsList.push(newItem);

      this.setState({ items: itemsList });
      this.setState(({ leftCount: this.countLeft(itemsList) }));
      this.setState({ search: '' });
      storeSave(this.state.items);
      reloadCounter++;
    }
  }
  
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
