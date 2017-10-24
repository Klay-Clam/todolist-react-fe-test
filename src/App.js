import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';

const routeComponent = function (type, context) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <List type={type}
          items={Search(context.state.items, context.state.search)}
          checkItem={context.checkItem}
          deleteItem={context.deleteItem}
          editItem={context.editItem} />

        <Alert value={context.state.alert.value}
          visible={context.state.alert.visible}
          hide={() => context.alert("", false, "")}
          type={context.state.alert.type} />
      </div>

      <div className="panel-footer">
        <LeftItems value={context.state.leftCount} />
        <ListSelector active={type} />

        <GlobalAction
          deleteCompleted={context.deleteCompleted}
          checkAll={context.checkAll} />
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return ( 
      <Router history={hashHistory} key={reloadCounter}>
        <Route path="/" component={() => routeComponent("all", this)} />
        <Route path="/active" component={() => routeComponent("active", this)} />
        <Route path="/completed" component={() => routeComponent("completed", this)} />
      </Router>
    );
  }
}

export default App;