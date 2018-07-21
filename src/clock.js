import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 多个时钟
 * @returns {*}
 * @constructor
 * properties
 */
class Clock extends React.Component{

    // 希望由组件内部管理并更新时间
    constructor() {
        super();
        // 1. 初始化自己的state状态
        this.state = {
            date: new Date()
        };

    }

    // 组件已经挂载 *
    componentDidMount(){
        console.log('componentDidMount: 组件已经挂载, 开启定时任务' + this.props.title);
        // 每秒更新一次date
        setInterval(() => {
            // 2. 更新state值, 触发render函数重新渲染页面
            this.tick();

        }, 1000);
    }

    tick() {
        // 把新的state对象合并到之前的对象中
        this.setState({
            date: new Date()
        });
    }


    render(){
        console.log("render"+ this.props.title);
        return (
            <div>
                <h1>{this.props.title}</h1>
                {/*3. 访问state下的date*/}
                <h3>{this.state.date.toLocaleString()}</h3>
            </div>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Clock title="时钟1"/>
                <Clock title="时钟2"/>
                <Clock title="时钟3"/>
            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
