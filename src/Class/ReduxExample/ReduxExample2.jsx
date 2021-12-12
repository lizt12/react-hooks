import React, { Component } from 'react';
import store from './store';

export default class ReduxExample2 extends Component {
    render() {
        return (
            <div>
                <p>当前和为{store.getState()}</p>
            </div>
        )
    }
}
