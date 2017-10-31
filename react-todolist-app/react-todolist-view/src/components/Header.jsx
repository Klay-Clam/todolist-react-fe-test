import React from 'react';
import ReactRouter from 'react-router';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: this.props.username,
            search: '',
        }

        // bind context
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    
    // 登录
    signIn(){
        
        console.log('sign in');
    }
    //注册
    signUp(){
        console.log('sign up');
    }
    render(){
        return (
            <header>
                <div className='avatar-container'>
                    {this.state.username !== 'visitor' ? <span><a>{this.state.username}</a></span> : <span><a onClick={this.signIn}>登录</a><span>|</span><a onClick={this.signUp}>注册</a></span>}
                </div>
                
                <input type="text" className='search' value={this.state.search} placeholder='Search items'/>
            </header>
        )
    }
}

export default Header;