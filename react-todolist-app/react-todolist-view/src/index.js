import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import TodoApp from './containers/TodoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoApp/>, document.getElementById('root'));
registerServiceWorker();
