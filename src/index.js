import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Class/ReduxExample/store';

ReactDOM.render(<App />, document.getElementById('root'));

// 订阅redux的状态变化
store.subscribe(()=>{
  ReactDOM.render(<App />, document.getElementById('root'));
})

reportWebVitals();
