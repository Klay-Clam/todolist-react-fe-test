import React from 'react';

class New extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }

    handleTyping(event) {
        this.setState({ value: event.target.value });
    }

    render(){
        return (
            <li className='newitem'>
                <span>+</span> <input type="text" value={this.state.value}
                    onChange={this.handleTyping} />
            </li>
        )
    }
}

export default New;