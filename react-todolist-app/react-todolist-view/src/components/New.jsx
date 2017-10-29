import React from 'react';

// utils 
import {isBlank,removeSpaces} from '../utils/IsBlank';
class New extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username:this.props.username,
            nextId: this.props.nextId,
            item : {
                id: '',
                text: '',
            } 
        };

        // bind context
        this.handleTyping = this.handleTyping.bind(this);
        this.handlePushItemsList = this.handlePushItemsList.bind(this);
    }

    handleTyping(event) {
        this.setState({
            username: this.props.username,
            item:{
                text: event.target.value,
                id: `${this.state.username}-${this.state.nextId}`,
            },
        });
    }
    handlePushItemsList(event){
        console.log(this.state.item);  
        nextId : this.state.nextId + 1,
        console.log(this.state.nextId);
    }

    render(){
        return (
            <form >
                <li className='newitem'>
                    <label>+</label> <input type="text" value={this.state.item.text} id={this.state.item.id}
                        onChange={this.handleTyping}
                        onBlur={this.handlePushItemsList} />
                </li>
            </form>   
        )
    }
}

export default New;