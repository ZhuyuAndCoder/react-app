/**
 * Created by zhuyu on 2017/7/14.
 */
import React, { Component } from 'react';
import './style.css'

const width = 4;
const gutter = 4;
const height = 8;
const fill = '#000000';
const stroke = '#000000';
class Pencil extends Component{
    render(){
        const {x,y,className,onEdit,...other} = this.props;
        const topStyle = {fill,stroke}
        const d = `M${x},${y+gutter+height} L${x+width},${y+gutter+height} L${x+width/2},${y+gutter+height+width*0.8} Z`
        const transform = `rotate(10,${x+width/2} ${y+(2+gutter+height+width*0.8)/2})`
        return (
            <g strokeWidth="1" className={`${className} hover`} transform={transform} onClick={onEdit} {...other}>
                <rect x={x} y={y} width={width} height="2" rx="2" ry="2" style={topStyle}/>
                <rect x={x} y={y+gutter} width={width} height={height} style={topStyle}/>
                <path d={d} fill="#ffffff" stroke="#000"/>
            </g>
        )
    }
}
export default Pencil