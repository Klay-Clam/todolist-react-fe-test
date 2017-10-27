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
            items: [],
            text:'',
            undone: this.props.undone,
        }

        // bind Context
        // this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount(){
        var data = {
            username:'admin'
        };
        var url = 'http://127.0.0.1:4000/getAllItems';
        $.ajax({
            url: url,
            processData: false,
            cache: false,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            datatype: "JSON",
            type: 'POST',
            success: function (res) {
                console.log(res)
            }, 
            error: function (err) {
                console.log(err);
            }
    })
        console.log('did mount');
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