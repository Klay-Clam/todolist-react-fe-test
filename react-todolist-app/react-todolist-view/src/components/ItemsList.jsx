import React,{Component} from 'react';

import Item from './Item';
import New from './New';
import EmptyTip from './EmptyTip';

// utils 

class ItemsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username,
            items: [],
            unfinishedQuantity: 0,
        }
    }

    render(){
        return (
            <div className='ItemsList'>
                <ul>
                    { this.state.username === 'visitor' ? <EmptyTip/> : <div><Item/><Item/></div>}
                    <New/>
                </ul> 
            </div>
        )
    }
}

ItemsList.defaultProps = {
    
}

export default ItemsList;