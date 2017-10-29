import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: this.props.username,
            search: '',
        }

        // bind context
    }
    render(){
        return (
            <header>
                <div className='avatar-container'>
                    {this.state.username !== 'visitor' ? <span><a href='#'>{this.state.username}</a></span> : <span><a href='#'>登录</a><span>|</span><a href='#'>注册</a></span>}
                </div>
                
                <input type="text" className='search' value={this.state.search} placeholder='Search items'/>
                <button type='button'>
                    + 
                </button>
            </header>
        )
    }
}

export default Header;