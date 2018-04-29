import React, { Component } from 'react'
import Children from "./base/children.jsx"
import {event,state} from "../flux"
class Main extends Component {
    constructor(props) {
        super(props)
        this.state={
                num:state.getnum()
        }
        event.$on("change",()=>{
            // 事件监听
            this.setState({
                num:state.getnum()
            })
        })
    }
    
    render() {
        return (
            <div > 
                <span>主页</span>
                <span>{this.state.num}</span>
                <Children></Children>
             < /div>
        )
    }
}


export default Main