import React, { Component } from "react";

export default class Example extends Component {
  state = {
    age: 18,
    sex: true,
  };
  render() {
    return (
      <div>
        <p>今年：{this.state.age}岁</p>
        <button onClick={() => { this.setState({ age: ++this.state.age }); }}>
          点我加1
        </button>
        <p>性别：{this.state.sex ? "男" : "女"}</p>
        <button onClick={() => { this.setState({ sex: !this.state.sex }); }}>
          变性
        </button>
      </div>
    );
  }
}
