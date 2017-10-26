import React from 'react';

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            value: this.props.value
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        checkItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired
    }
    
    render(){
        return (
            <li className='item'>
                <input type="checkbox"/>
                {/* <span>items</span> */}
                <input className='editItem' readOnly value='items' type="text"/>
                <button className='editPlus'>!</button>
            </li>
        )
    }
}

export default Item;