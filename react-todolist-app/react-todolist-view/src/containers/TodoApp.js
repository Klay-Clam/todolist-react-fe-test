import React, { Component } from 'react';
import '../style/App.css';
import {Link} from 'react-router';
import Routes from '../Routes';

class TodoApp extends Component {
  
  render() {
    return (
      <section className='panel'>
        page
      </section>
    );
  }
}

TodoApp.defaultProps = {
  username: 'visitor',
  unfinishedQuantity: 0,
}
export default TodoApp;
