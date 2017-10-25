import React from 'react';

class New extends React.Component{

    render(){
        return (
            <li className='newitem'>
                <span>+</span> <input type="text" />
            </li>
        )
    }
}

export default New;