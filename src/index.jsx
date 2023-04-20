import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*需求二：从服务器获取了一组列表数据，循环绑定相关内容 */
let data=[{
  id:1,
  title:'快乐学习react'
},{
  id:2,
  title:'快乐学习react2'
},{
  id:3,
  title:'快乐学习react3'
}]

root.render(
  <>
  <h2 className="title">今日新闻</h2>
  <ul className="new-box">
    {data.map((item,index)=>{
       {/* 循环创建元素一定要设置key,一定是个唯一值 优化dom-diff */}
      return <li key={item.id}>
      <em>{index + 1}</em>
       &nbsp;&nbsp;
       <span>{item.title}</span>
     </li>;
    })}  
  </ul>
  </>
);



/**
 * 需求一：基于数据的值，判断元素显示或者隐藏
 */
// let flag = true,
//     isRun = true;
// root.render(
//     <>
//     {/* 控制元素显示或者隐藏 */}
//       <h2  className='box' style={{
//         color:'red',
//         fontSize: '18px'
//       }}>我在学习react</h2>
      
//       <button style={{
//         display:flag ? 'block' : 'none'
//       }}>按钮1</button>

//       <br />

//       {/* 控制元素渲染或者不渲染 */}
//       {flag ? <button>按钮2</button> : null}

//       <button>{isRun ? '正在处理中...' : '立即注册提交'}</button>
//     </>
// ); 
