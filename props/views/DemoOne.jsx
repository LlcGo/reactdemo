import PropTypes from 'prop-types';
const DemoOne = function DemoOne(props){
    // console.log(props)
    let { title,className,style } = props
    let x = props.x;
    console.log('x'+ x)
    return <div className={`demo-box ${className}`} style={style}>
        <div className="title">{title}</div>
        <span>{x}</span>
    </div>;
}

/**通过把函数当作对象，设置静态的私有方法, 来给其设置属性的规则*/
DemoOne.defaultProps={
    x:0
}
/**函数组件规则 第一种类型字符串 第二种类型是设置 */
DemoOne.propTypes = {
 title:PropTypes.string.isRequired,
 x: PropTypes.number,
 y:PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
 ])
};
export default DemoOne;
    
