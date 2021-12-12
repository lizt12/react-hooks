import React, { Component } from 'react';
import store from './store';
import ReduxExample2 from './ReduxExample2';
import { createAysncAction, createAction } from './action';

export default class ReduxExample1 extends Component {
    render() {
        return (
            <div>
                <h1>类Redux实例</h1>
                <ReduxExample2 />
                <button onClick={() => {
                    store.dispatch(createAction('increment',1))
                }}>点我加一</button>
                <button onClick={() => {
                    store.dispatch(createAysncAction('decrement',1,500))
                }}>点我减一</button>
            </div>
        )
    }
}
