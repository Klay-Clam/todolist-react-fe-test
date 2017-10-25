import React from 'react';

import Item from './Item';
import New from './New';
class ItemsList extends React.Component{

    render(){
        return (
            <div className='ItemsList'>
                <ul>
                    <New/>
                </ul>
            </div>
        )
    }
}

export default ItemsList;