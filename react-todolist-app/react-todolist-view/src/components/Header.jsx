import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isSignIn : this.props.isSignIn,
            username: this.props.username,
        }

        // bind context
    }
    render(){
        return (
            <header>
                <div className='avatar-container'>
                    {this.state.isSignIn ? <span><a href='#'>{this.state.username}</a></span> : <span><a href='#'>登录</a>|<a href='#'>注册</a></span>}
                </div>
                
                <input type="text" className='search' placeholder='Search items'/>
                <button type='button'>
                    + 
                </button>
            </header>
        )
    }
}

export default Header;