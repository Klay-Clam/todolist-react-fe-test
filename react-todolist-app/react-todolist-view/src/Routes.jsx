import {React,Component} from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import UserCenter from './containers/UserCenter';
import Completed from './containers/Completed';
import All from './containers/All';

let reloadCounter = 0;
class Routes extends Component{
    render(){        
        return (
            <Router history={hashHistory} key={reloadCounter}>
                <Route path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/ubcompleted" component={Home}/>                
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>                
                <Route path="/user" component={UserCenter}/>                
                <Route path="/completed" component={Completed}/>
                <Route path="/all" component={All}/>               
            </Router>
        )
    }
}

export default Routes;