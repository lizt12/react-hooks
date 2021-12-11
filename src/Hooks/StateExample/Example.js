import React, { useState } from "react";

export default function Example() {
    // useState不允许存在条件判断
    const [age, setAge] = useState(18);
    const [sex, setSex] = useState(true);
    return (
        <div>
            <p>今年：{age}岁</p>
            <button onClick={() => { setAge(age + 1); }}>
                点我加1
            </button>
            <p>性别：{sex ? "男" : "女"}</p>
            <button onClick={() => { setSex(!sex); }}>
                变性
            </button>
        </div>
    );
}
