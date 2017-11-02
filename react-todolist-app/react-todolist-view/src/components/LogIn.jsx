import React, { Component, PropTypes } from 'react';

class LogIn extends Component{
    render(){
        return (
            <form>
                <label htmlFor="username"></label><input id={'username'} type="text"/><br/>
                <label htmlFor="password"></label><input id={'password'} type="password"/><br/>
                <button>Sign In</button>
            </form>
        )
    }
}

export default LogIn;