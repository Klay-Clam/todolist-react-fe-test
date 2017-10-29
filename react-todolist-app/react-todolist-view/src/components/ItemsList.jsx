import React from 'react';

import Item from './Item';
import New from './New';
import EmptyTip from './EmptyTip';
import Log from './Log';

// utils 
import {storeGet,storeSave} from '../store/Store';
import $ from 'jquery';

class ItemsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username,
            items: [],
            undone: this.props.undone,
        }

        // bind Context
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(item){
        
    }

    render(){
        return (
            <div className='ItemsList'>
                <ul>
                    {/* 首先判断itemsList是否为空，为空则显示提示语句 */}
                    { this.state.username === 'visitor' ? <EmptyTip/> : <div><Item/><Item/></div>}
                    <New nextId={this.state.items.length + 1}
                         handleAdd={this.handleAdd}
                         username={this.state.username}
                    />
                </ul> 
            </div>
        )
    }
}

export default ItemsList;