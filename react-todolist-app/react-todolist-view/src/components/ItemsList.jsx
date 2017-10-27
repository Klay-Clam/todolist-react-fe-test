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
            items: [1,2],
            text:'',
            undone: this.props.undone,
        }

        // bind Context
        // this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount(){
        var data = {

        };
        $.ajax({
            url:'',
            type: 'GET',
            dataType: 'JSON',
            data: data,
            success: function(data){
                console.log(data);
                this.setState(
                    {
                        items:[],
                        text:''
                    }
                );
            },
            error: function(err){
                console.log(err);
            }
        })
    }

    render(){
        return (
            <div className='ItemsList'>
                <ul>
                    {/* 首先判断itemsList是否为空，为空则显示提示语句 */}
                    {this.state.items.length == 0 ? <EmptyTip/> : this.state.items.map((item)=>{
                        <p>items</p>
                    })}
                    <New nextId={this.state.items.length + 1}
                    />
                </ul> 
            </div>
        )
    }
}

export default ItemsList;