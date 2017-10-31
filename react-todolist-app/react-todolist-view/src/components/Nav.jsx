import React from 'react';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            unfinishedQuantity : this.props.unfinishedQuantity,
        }
    }
    render(){
        return (
            <nav>
                <span>提醒</span>
                <div>
                    <span>{this.state.undone}</span><br/>
                    <a>编辑</a>
                </div>
            </nav>
        )
    }
}

export default Nav;