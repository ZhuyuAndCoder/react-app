/**
 * Created by zhuyu on 2017/7/12.
 */
import React, { Component } from 'react';
import * as d3 from 'd3'

class ArrowMarker extends Component{
    line = d3.line()
            .x((d) => { return d.x; })
            .y((d) => { return d.y; });

    render(){
        const path = [{x:2,y:2},{x:10,y:6},{x:2,y:10},{x:6,y:6},{x:2,y:2}]
        return (
            <defs>
                <marker id="arrow"
                        markerUnits="strokeWidth"
                        markerWidth="12"
                        markerHeight="12"
                        viewBox="0 0 12 12"
                        refX="6"
                        refY="6"
                        orient="auto">
                    <path d={this.line(path)} style={{fill: '#000000'}} />
                </marker>
            </defs>
        )
    }
}
export default ArrowMarker
