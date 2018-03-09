/**
 *
 * */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import * as d3 from 'd3';
import { Provider } from 'react-redux';
import store from '../redux/store.js'
import Rect from '../components/Rect'
import ArrowMarker from '../components/ArrowMarker'
import RoundRectangle from '../components/RoundRectangle'
import Circle from '../components/Circle'
import AddRect from '../components/AddRect'
import Home from '../components/home'
// 引入4个模块组件
import Plan from '../components/plan'
import Popup from '../components/popup'
import TestRouter from '../components/testrouter'
import Detail from '../components/detail'
import '../components/comment.less'
import logo from '../logo.svg';
import editIcon from '../components/img/edit.ico'
import './App.css';
// 引入路由
// import createHistory from 'history/createBrowserHistory'
// const history = createHistory()

var x = 0;
var y = 0;
const height = 30;
const width = 130;
var options = [];
// const gutterX = 20;
const gutterY = height+20;
for(let i=0;i<2;i++){
    if(i===0){
        options.push({
            text:'患者移动平台'+i,
            x:x,
            y:y,
            width:width+'px',
            height:height+'px',
        })
    }else{
        options.push({
            text:'患者移动平台'+i,
            x:x,
            y:y+gutterY,
            width:width+'px',
            height:height+'px',
        })
    }
}
var timer;
class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            options: options,
            roundOption:{
                x:185,
                y:0,
                rx:10,
                ry: 10,
                width:'100px',
                height:'30px',
                text:'患者基本信息',
                owner: true,
            },
            circleOption:{
                cx:380,
                cy:52,
                r:50,
                text:'病人信息'
            },
            option1:{
                text:'EQ.S03.BS35002.PUT',
                x:470,
                y:37,
                width:width+30+'px',
                height:height+'px',
            },
            option2:{
                text:'应用消费V1.0 真实',
                x:650,
                y:37,
                width:width+30+'px',
                height:height+'px',
                editable:true,
                onEdit: this.onEdit,
            },
            inputValue: '',
            datas:{
                first:[{name:'患者移动平台'},{name:'PACE检查'},{name:'test检查'}],
                second: [{name:'患者基本信息'},{name:'门诊处方'}],

            },
            datas2:[
                {name:'aa',alias:'alia'},
                {name:'bb',alias:'123'},
                {name:'ccc',alias:'acd'},
            ],
            datas3:[
                {name:'aa',alias:'alia'},
                {name:'bb',alias:'123'},
                {name:'ccc',alias:'acd'},
            ],
            condition:''
        }
    }
    line = d3.line()
        .x((d) => { return d.x; })
        .y((d) => { return d.y; })
        // .curve(d3.curveCardinal)
    onEdit = () =>{
        alert('edit')
    }
    componentWillMount(){

    }
    componentDidMount(){
        let svg = d3.select(this.refs.svg);
        // svg.select('.hover-show').append('a').html('123')
        //绘制直线
        svg.append("line")
            .attr("x1",285)
            .attr("y1",15)
            .attr("x2",340)
            .attr("y2",15)
            .attr("stroke","red")
            .attr("stroke-width",1)
            .attr("marker-end","url(#arrow)");
    }
    onChange = (e) =>{
        this.setState({inputValue: e.target.value})
    }
    onChange2 = (e) =>{
        const value = e.target.value;
        this.setState({condition: value})
        clearTimeout(timer)
        timer = setTimeout(()=>{
            this.filter(value)
        },300)
    }
    filter = (condition) => {
        condition = condition.trim()
        let arr = this.state.datas2.filter((item,i)=>{
            if(item.name && item.name.indexOf(condition)>-1){
                return true
            }else if(item.alias && item.alias.indexOf(condition)>-1){
                return true
            }else{
                return false
            }
        })
        this.setState({datas3: arr})
    }
  render() {
        // const curvePath = [{x:550,y:67},{x:550,y:117},{x:380,y:117},{x:380,y:108}]
     const curvePath = 'M550 67 L550 120 Q550 127,540 127 L390 127 Q380 127, 380 117 L380 108'
      // const curvePath = 'M550 67 L550 120 C550 122,545 127,540 127 L390 127 Q380 127, 380 117 L380 108'
    return (
        <Provider store={store}>
          <div className="App">
              <div className="App-header">
                  {/*<img src={logo} className="App-logo" alt="logo" />*/}
                  <div>
                      <dl>
                          <dt><input onChange={this.onChange2} value={this.state.condition}/></dt>
                          {this.state.datas3.map((item,i) => {
                              return (<dd key={i}>姓名：{item.name} 别名：{item.alias}</dd>)
                          })}
                      </dl>
                  </div>
              </div>
            <div className="App-intro" style={{display:'none'}}>
                <svg ref="svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 1500 400">
                    <ArrowMarker/>
                    <RoundRectangle option={this.state.roundOption}/>
                    <line x1="130" y1="15" x2="180" y2="15"  stroke="red" strokeWidth="1" markerEnd="url(#arrow)"/>
                    {
                        this.state.options.map((item,i) =>{
                            return <Rect key={i} option={item}></Rect>
                        })
                    }
                    <Circle option={this.state.circleOption}></Circle>
                    <Rect option={this.state.option1}></Rect>
                    <path d={curvePath} style={{stroke:'#000',strokeWidth:'1',fill:'transparent'}} markerEnd="url(#arrow)"/>
                    <Rect option={this.state.option2} className="hover-show">
                        {/*<image x="784" y="40" xlinkHref={editIcon} width="20" height="20" onClick={this.onEdit}></image>*/}
                    </Rect>
                    <AddRect option={{x:650,y:100,width:130,height: 30}}></AddRect>
                </svg>
                <input value={this.state.inputValue} onChange={this.onChange}/>
                <svg height="100%" >
                    <rect x="10" y="10" width="40" height="20" rx="5" ry="5">
                        <set attributeName="fill" from="lightgrey" to="red" begin="mouseover" end="mouseout"/>
                    </rect>
                </svg>
            </div>
              <div>
                  {/*// 路由配置*/}
                  <Router>
                      <div className="contentBox">
                          {/*// 编写导航*/}
                          <ul className="nav">
                              <li><Link to="/">首页</Link></li>
                              <li><Link to="/plan">计划表</Link></li>
                              <li><Link to="/test">二级路由</Link></li>
                          </ul>
                          {/*// 路由匹配*/}
                          <div className="content">
                              <Route exact path="/" component={Home}/>
                              <Route path="/plan" component={Plan}/>
                              <Route path="/test" component={TestRouter}/>
                              <Route path="/detail/:id" component={Detail}/>
                          </div>
                      </div>
                  </Router>
              </div>
              <Popup/>
          </div>
        </Provider>
    );
  }
}

export default App;