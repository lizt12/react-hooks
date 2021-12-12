import React from 'react';
import ReduxExample2 from './ReduxExample2';
import ReduxExample3 from './ReduxExample3';
import { Count} from './count';

export default function ReduxExample1() {
    return (
        <div>
            <Count>
                <h2>HooksRedux实例</h2>
                <ReduxExample2 />
                <ReduxExample3 />
            </Count>
        </div>
    )
}

