import React, { Component } from 'react'

export default class LifeExample extends Component {
    state = {
        count: 0
    }

    resetInterval() {
        this.setState({
            count: 0
        });
    }

    componentDidUpdate() {
        console.log('class componentDidUpdate');
    }

    componentDidMount(){
        console.log('class componentDidMount');
    }

    componentWillUnmount(){
        console.log('class componentWillUnmount');
    }

    render() {
        return (
            <div>
                <h1>类生命周期实例</h1>
                <p>计时器执行次数：{this.state.count}次</p>
                <button onClick={this.resetInterval.bind(this)}>重新渲染</button>
            </div>
        )
    }
}

