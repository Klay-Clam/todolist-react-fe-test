import React from 'react';

class Footer extends React.Component{

    render(){
        return (
            <footer>
                <div className='showFinished'>
                    <a href='#'>显示已完成项目</a>
                </div>
                <div className='blank'></div>
                <div className='showTodayPlan'>
                    <a href="#">今日已计划</a>
                </div>
            </footer>
        )
    }
}

export default Footer;