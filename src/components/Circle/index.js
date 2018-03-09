/**
 * Created by zhuyu on 2017/7/12.
 */
import React, { Component } from 'react';
import * as d3 from 'd3';

class Circle extends Component{
    static defaultProps = {
        option:{
            cx:0,
            cy:0,
            r:100,
            text:''
        }
    }
    constructor(props){
        super(props)
        this.state = {
            fill: 'green'
        }
    }
    onMouseOver = (e) =>{
        this.setState({fill:'red'})
    }
    onMouseOut = (e) =>{
        this.setState({fill:'green'})
    }
    render(){
        const gutter = 10;
        const {cx,cy,r,text} = this.props.option;
        const style = {fill:'#ffffff',strokeWidth:1,stroke:'#000000'};
        const style2 = {strokeWidth:1,stroke:'#000000'};
        const testStyle = {fill:'#fff',fontSize: '14px'};
        return (
             <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <circle {...{cx,cy,r}} style={style}/>
                <circle {...{cx,cy,r:r-gutter}} fill={this.state.fill} style={style2}/>
                 {/*<tspan {...{x:cx-r+gutter+11,y:cy+7}} style={testStyle}>{text}</tspan>*/}
                <text {...{x:cx-r+gutter+11,y:cy+7}} style={testStyle}>{text}</text>
            </g>
        )
    }
}
export default Circle