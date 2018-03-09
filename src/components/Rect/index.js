/**
 * Created by zhuyu on 2017/7/11.
 * 矩形组件
 */
import React, { Component } from 'react';
import * as d3 from 'd3';
import Pencil from '../Pencil'

import './style.css'

class Rect extends Component{
    static defaultProps = {
        option:{
            x:0,
            y:0,
            width:'100px',
            height:'30px',
            text:'',
            editable: false,
        }
    }
    constructor(props){
        super(props)
        this.state = {
            style: {display: 'none'}
        }
    }
    onMouseEnter = (e) =>{
        if(this.props.option.editable === true){
            this.setState({style: {display: 'inline-block'}})
        }
    }
    onMouseLeave = (e) =>{
        if(this.props.option.editable === true){
            this.setState({style: {display: 'none'}})
        }
    }
    render(){
        const {x,y,width,height,text,editable,onEdit} = this.props.option;
        const w = width.replace('px','') * 1;
        const {className} = this.props;
        const style = {fill:'#ffffff',strokeWidth:1,stroke:'#000000'};
        const testStyle = {color:'#000',fontSize: '14px'};
        return (
            <g className={className}  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <rect {...{x,y,width,height}} style={style}></rect>
                <text {...{x:x+10,y:y+20}} style={testStyle}>{text}</text>
                <Pencil x={x+w-20} y={y+6} className="lean" style={this.state.style} onClick={onEdit}/>
                {this.props.children}
            </g>
        )
    }
}
export default Rect