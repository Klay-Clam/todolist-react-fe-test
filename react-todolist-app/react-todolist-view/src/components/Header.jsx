import React from 'react';

class Header extends React.Component{

    render(){
        return (
            <header>
                <div className='avatar-container'><a href='#'>登录</a>|<a href='#'>注册</a></div>
                
                <input type="text" className='search' placeholder='Search items'/>
                <button type='button'>
                    + 
                </button>
            </header>
        )
    }
}

export default Header;