import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoOne from './views/DemoOne'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <DemoOne title="helloCompent" x={10}>
    <span slot='header'>我是页眉</span>
    <br />
    <span slot='footer'>我是页脚</span>
  </DemoOne>

  <DemoOne title="我是第二个组件">
    <span>我是第二个组件的内部组件</span>
  </DemoOne>

  <DemoOne title="第三个空组件"/>
  </>
);
