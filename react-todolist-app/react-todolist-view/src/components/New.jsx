import React from 'react';

class New extends React.Component{
    handleEdited(event){
        this.setState({ value: event.target.value });
    }

    render(){
        return (
            <li className='newitem'>
                <span>+</span> <input type="text" value={this.state.value}
                    onBlur={this.handleEdited} />
            </li>
        )
    }
}

export default New;