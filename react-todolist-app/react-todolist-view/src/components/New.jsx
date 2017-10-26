import React from 'react';

class New extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item : {
                id: this.props.nextId,
                text: '',
            } 
        };

        // bind context
        this.handleTyping = this.handleTyping.bind(this);
        this.handlePushItemsList = this.handlePushItemsList.bind(this);
    }

    handleTyping(event) {
        this.setState({item:{text:event.target.value}});
    }
    handlePushItemsList(event){
        // alert(event.target.value);
        // 这里应该是在input失去焦点之后，将创建的内容的value赋值给新建的Item
        console.log(event.target.value+ ",id:" + event.target.id);
        this.state.item.text = event.target.value;
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