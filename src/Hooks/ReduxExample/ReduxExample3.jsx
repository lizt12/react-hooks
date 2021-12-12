import React, { useContext } from 'react';
import { CountContext, INCREMENT, DECREMENT } from './count';

export default function ReduxExample3() {
    const { dispatch } = useContext(CountContext);
    return (
        <div>
            <button onClick={() => {
                dispatch(
                    {
                        type: INCREMENT,
                        data: 1
                    }
                )
            }}>点我加一</button>
            <button onClick={() => {
                dispatch(
                    {
                        type: DECREMENT,
                        data: 1
                    }
                )
            }}>点我减一</button>
        </div>
    )
}
