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
            isSignIn:this.props.isSignIn,
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
            url:'127.0.0.1:4000/',
            type: 'GET',
            data: data,
            success: function(data){
                console.log(data);
                // this.setState(
                //     {
                //         items:[],
                //         text:''
                //     }
                // );
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
                    {this.state.items.length == 0 || this.state.isSignIn == false ? <EmptyTip/> : <div><Item/><Item/></div>}
                    <New nextId={this.state.items.length + 1}
                    />
                </ul> 
            </div>
        )
    }
}

export default ItemsList;