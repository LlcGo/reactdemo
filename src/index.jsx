import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoOne from './views/DemoOne'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <DemoOne title="helloCompent" x={10} data={[20,30]} className="box" style={{fontSize:'20px'}} />
  <DemoOne title="6666"/>
  </>
  
);


// const obj = {
//   x:20,
//   y:30,
// }
//设置只读
// Object.freeze(obj)
// obj.x = 30;
// obj.z = 40;
// delete obj.z
// console.log(obj)