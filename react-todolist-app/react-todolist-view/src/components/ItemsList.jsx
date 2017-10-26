import React from 'react';

import Item from './Item';
import New from './New';
import EmptyTip from './EmptyTip';

// utils 
import {storeGet,storeSave} from '../store/Store';

class ItemsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [1,2],
            text:''
        }

        // bind Context
        // this.handleAdd = this.handleAdd.bind(this);
    }

    render(){
        return (
            <div className='ItemsList'>
                <ul>
                    {/* 首先判断itemsList是否为空，为空则显示提示语句 */}
                    {this.state.items.length === 0 ? <EmptyTip/> : <Item/>}
                    <New value=''
                        handleAdd={this.handleAdd}/>
                </ul> 
            </div>
        )
    }
}

export default ItemsList;