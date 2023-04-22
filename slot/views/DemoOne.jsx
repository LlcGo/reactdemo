import React from "react";
const DemoOne = function DemoOne(props){
    // console.log(props)
    let { title,x,children } = props
    // if(!children){
    //   children = [];
    // }else if(!Array.toString(children)){
    //   children = [children];
    // }
    // React.Children.forEach(children,()=>{ })
    //无论是什么都变成数组
    children = React.Children.toArray(children);
    let slotHead = [],
        slotFloor = [],
        slotDeaful = [];
        children.forEach(child => {
        let {slot} = child.props;
        if(slot === 'header'){
            slotHead.push(child);
        }else if(slot === 'footer'){
            slotFloor.push(child);
        }else{
            slotDeaful.push(child);
        }
    });
    return <div>
        {/* {children[0]} */}
        {slotHead}
        <br />
        {title}
        <br />
        <span>{x}</span>
        <br />
        {/* {children[1]} */}
        {slotFloor}
    </div>;
}
export default DemoOne;
    
