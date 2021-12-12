import React, { createContext, useState, useContext } from 'react';

const CountContext = createContext();

function PropsExample2() {
    let count = useContext(CountContext);
    return (
        <div>
            <p>点击了{count}次</p>
        </div>
    )
}

function PropsExample3(props) {
    let {count} = props;
    return (
        <div>
            <p>点击了{count}次</p>
        </div>
    )
}

export default function PropsExample1() {

    const [count, setCount] = useState(0);

    function setCountButton() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>HooksProps实例</h1>
            <button onClick={() => { setCountButton() }}>点我加1</button>
            <CountContext.Provider value={count}>
                <PropsExample2 />
            </CountContext.Provider>
            <PropsExample3 count={count}></PropsExample3>
        </div>
    )
}
