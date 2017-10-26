import React from 'react';

class Log extends React.Component{

    render(){
        return (
            <div>
                <label htmlFor="username">账号：</label><input id='username' type="text"/><br/>
                <label htmlFor="password">密码：</label><input id='password' type="password"/><br/>
                <button type='button'>登录</button>
            </div>
        )
    }
}

export default Log;