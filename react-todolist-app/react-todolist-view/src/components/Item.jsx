import React from 'react';

class Item extends React.Component{

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