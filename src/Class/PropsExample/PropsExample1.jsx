import React, { Component } from 'react'
import PropsExample2 from './PropsExample2'

export default class PropsExample1 extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <h1>类Props实例</h1>
                <button onClick={()=>{this.setState({count:++this.state.count})}}>点我加1</button>
                <PropsExample2 count={this.state.count}></PropsExample2>
            </div>
        )
    }
}
