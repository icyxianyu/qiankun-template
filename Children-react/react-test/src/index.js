import './publicPath'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

let root;

function createRoot(props = {}) {
  // container中包含了qiankun创建的dom，它会插入一个带有id为root的dom
  const { container } = props;
  root = ReactDOM.createRoot(container ? 
    container.querySelector('#root') : 
    document.querySelector('#root'));
  root.render(
    // <BrowserRouter>
      <App />
    // </BrowserRouter>
  );
}
// 独立运行，直接调用 createRoot函数 render
if (!window.__POWERED_BY_QIANKUN__) {
  createRoot();
}
// lifecycle => 初始化
export async function bootstrap(props) {
  // console.log(props)
}

// lifecycle => 挂载
export async function mount(props) {
  createRoot(props);
}

// lifecycle => 卸载
export async function unmount(_props) {
  root.unmount();
}
