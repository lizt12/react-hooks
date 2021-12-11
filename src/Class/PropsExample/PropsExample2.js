import React, { Component } from 'react'

export default class PropsExample2 extends Component {
    render() {
        const {count} = this.props;
        return (
            <div>
                <p>点击了{count}次</p>
            </div>
        )
    }
}
