import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            handleShowFinishedItem: this.props.handleShowFinishedItem,
            handleShowTodayPlaned: this.props.handleShowTodayPlaned,
        }
    }
    render(){
        return (
            <footer>
                <div className='showFinished'>
                    <a >显示已完成项目</a>
                </div>
                <div className='blank'></div>
                <div className='showTodayPlan'>
                    <a >今日已计划</a>
                </div>
            </footer>
        )
    }
}

export default Footer;