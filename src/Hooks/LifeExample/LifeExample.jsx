import React, { useEffect, useState } from 'react'

export default function LifeExample() {
    const [count, setCount] = useState(0);
    const [test,setTest] = useState(0);
    // 第二个参数为空数组时相当于componentDidMount生命周期
    useEffect(() => {
        console.log('hooks componentDidMount');
        // 模拟componentWillUnmount生命周期
        return () => {
            console.log('hooks componentWillUnmount');
        }
    }, []);
    // 第二个参数不为空数组时相当于componentDidUpdate生命周期，不传默认监听所有属性
    useEffect(() => {
        console.log('hooks componentDidUpdate');
    }, [count]);
    return (
        <div>
            <h1>Hooks生命周期实例</h1>
            <p>计时器执行次数：{count}次</p>
            <button onClick={() => { setCount(count + 1) }}>重新渲染页面</button>
            <button onClick={() => { setTest(test + 1) }}>重新渲染页面2</button>
        </div>
    )
}
