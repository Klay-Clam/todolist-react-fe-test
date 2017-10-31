import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Routes from './Routes';
// import TodoApp from './containers/TodoApp';
import {hashHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes history={hashHistory}/>, document.getElementById('root'));
registerServiceWorker();
