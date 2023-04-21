const DemoOne = function DemoOne(props){
    // console.log(props)
    let { title,className,style,data } = props
    console.log(data)
    return <div className={`demo-box ${className}`} style={style}>
        <div className="title">{title}</div>
        {data}
    </div>;
}
export default DemoOne;
    
