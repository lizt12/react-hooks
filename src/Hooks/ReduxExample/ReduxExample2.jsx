import React,{useContext} from 'react'
import { CountContext } from './count'

export default function ReduxExample2() {
    const {count} = useContext(CountContext);
    return (
        <div>
            <p>当前和为{count}</p>
        </div>
    )
}
