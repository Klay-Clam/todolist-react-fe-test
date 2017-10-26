import React from 'react';

import Item from './Item';
import New from './New';
class ItemsList extends React.Component{

    render(){
        return (
            <div className='ItemsList'>
                <ul>
                    {/* <New/> */}
                    {this.state.items.length > 0 ? this.state.items.map((item, index) =>
                    <Item value={item.value}
                        key={item.id} id={item.id}
                        checked={item.checked}
                        checkItem={this.props.checkItem}
                        deleteItem={this.props.deleteItem}
                        editItem={this.props.editItem}
                        context={this.props.context} />
                    ) : <div className="alert alert-danger searchNoResult">
                        Type the text and press <b>"Enter"</b> to add item.
                        </div>}
                </ul>
            </div>
        )
    }
}

export default ItemsList;