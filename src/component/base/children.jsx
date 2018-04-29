import React, { Component } from 'react'

import {actions} from "../../flux"

class Children extends Component {
    constructor(props) {
        super(props)
    }
    
   render() {
        return (
            <div>
                <p>这里是子组件</p>
               <button onClick={()=>actions.addNum(3)}>点击增加</button>
            </div> 
        )
    }    
}


export default Children