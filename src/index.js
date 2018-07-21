import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0,
            timeLeft:10


        }
    }
    组件已挂载

    componentDidMount() {
        this.timerId = setInterval(()=>{
           if(this.isTimeUp()){
               clearInterval(this.timerId)
               //停止服务
               return
           }
           //更新剩余时间
            this.setState({
                timeLeft:this.state.timeLeft-1
            })
        },1000)
    }

    isTimeUp(){
        return this.state.timeLeft<=0
    }

    handleClick=()=>{
       if(this.isTimeUp()){
           return
       }
        //点按一次按钮，把count++
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
         let tip = null;
         if(this.isTimeUp()){
             tip = <h3>时限已到，总共按了{this.state.count}</h3>
         }else {
             tip = <h3>剩余时间：{this.state.timeLeft}</h3>
         }
        // let tip = <h3>剩余时间：{this.state.timeLeft}</h3>
        const btnStyle = {
             width:200,height:200,
            backgroundColor:(this.state.count%2 === 0)? 'red':'green',
            fontsize:22
        }
         return(<div>
             <h2>
                 计数器游戏，试试你的手速

             </h2>
             {tip}
             <button style={btnStyle}onClick ={this.handleClick}>
                 我是按钮{this.state.count}

             </button>
         </div>)
        }






}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
