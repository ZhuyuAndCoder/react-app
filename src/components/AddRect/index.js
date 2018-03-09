/**
 * Created by zhuyu on 2017/7/14.
 */
import React, { Component } from 'react';
import './style.css'
class AddRect extends Component{
    static defaultProps = {
        option:{
            x:0,
            y:0,
            width:'100px',
            height:'30px',
        }
    }
    render(){
        const {x,y,width,height} = this.props.option;
        const style = {fill:'#ffffff',strokeWidth:1,stroke:'#000000',strokeDasharray:'10,10'};
        const testStyle = {color:'#000',fontSize: '14px'};
        const d = `M${x+width/2-10},${y+15} L${x+width/2+10},${y+15} M${x+width/2},${y+5} L${x+width/2},${y+25}`
        return (
            <g className="add">
                <rect {...{x,y,width,height}}></rect>
                <g strokeDasharray="0" stroke="#000000">
                    <path d={d}/>
                </g>
            </g>
        )
    }
}
export default AddRect