/**
 * Created by zhuyu on 2017/7/12.
 * 圆角矩形
 */

import React, { Component } from 'react';
import * as d3 from 'd3';


class RoundRectangle extends Component{
    static defaultProps = {
        option:{
            x:0,
            y:0,
            rx:10,
            ry: 10,
            width:'100px',
            height:'30px',
            text:''
        }
    }
    constructor(props){
        super(props)
        this.state = {
            fill: '#ffffff',
            color: '#000',
        }
    }
    onMouseEnter = (e) =>{
        this.setState({
            fill: 'green',
            color: '#ffffff',
        })
    }
    onMouseLeave = (e) =>{
        this.setState({
            fill: '#ffffff',
            color: '#000',
        })
    }
    render(){
        const {text,owner,...other} = this.props.option;

        const style = {fill:this.state.fill,strokeWidth:1,stroke:'#000000'};
        const testStyle = {fill:this.state.color,fontSize: '14px'};
        return (
            <g onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <rect {...other} style={style}/>
                <text {...{x:other.x+10,y:other.y+20}} style={testStyle}>{text}</text>
                {owner?([
                        <circle key="1" cx={other.x+10} cy={other.y} r="8" style={{fill:'green',fontSize: '8px'}}/>,
                        <text x={other.x+5} y={other.y+3} key="2" fill="#ffffff" fontSize="10">主</text>
                ]
                ):null}
            </g>
        )
    }
}
export default RoundRectangle