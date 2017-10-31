import React from 'react';

// utils
class New extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username:this.props.username,
            item : {
                text: '',
                isDone: false,
            } 
        };
    }

    render(){
        return (
            <form >
                <li className='newitem'>
                    <label>+</label> <input type="text" value={this.state.item.text}
                        onChange={this.handleTyping}
                        onBlur={this.handlePushItemsList} />
                </li>
            </form>   
        )
    }
}

New.defaultProps = {
    username: 'visitor',
    item:{
        text: '',
        isDone: false,
    }
}

export default New;