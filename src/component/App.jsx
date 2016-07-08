import React from 'react';
import {Timeline, Input, Select, InputNumber, Popover, Button,Tree } from 'antd';

import '../jane/EditDialog/css/basic_new_v2.css';
import '../jane/EditDialog/css/pagev2.3.css';
import './App.less';
import reqwest from 'reqwest'
import JanePopup from '../jane/JanePopup'
import EditDialog from '../jane/EditDialog'

import  { Component } from 'react';
const Option = Select.Option;

const TreeNode = Tree.TreeNode;
const style = {
    padding: '.3em .8em',
    border: '1px solid rgba(0, 0, 0, .1)',
    background: '#58a linear - gradient(hsla(0, 0 %, 100 %, .2),transparent)',
    borderRadius: '.2em',
    boxShadow: '0 .05em .25em rgba(0,0,0,.5)',
    color: 'white',
    textShadow: '0 -.05em .05em rgba(0,0,0,.5)',
    fontSize: '125%',
    lineHeight: '1.5',
}

function handleChange(value) {
    console.log(`selected ${value}`);
}


class EditDialog_Demo extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            visible: false
        }

    }

    onclick = (e)=> {
        this.setState({
            visible: true
        })
    }

    render() {

        return (
            <div style={{margin: '100px auto'}}>
                <Button onClick={this.onclick}>新建任务</Button>
                <EditDialog
                    visible={this.state.visible}
                    title="新建任务">

                    <div className="BoxPopwrap_cnt_ListBoxH845">
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name"><span className="Red">*</span>任务名称：
                            </div>
                            <div className="BoxPopwrap_Cont01_box01Input"><input type="text"
                                                                                 className="Cont01_box01Input_k01 With280"/>
                            </div>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name"><span className="Red">*</span>任务类型：
                            </div>
                            <div className="BoxPopwrap_Cont01_box01Input">
                                <select className="BoxPopwrap_Cont01_box01Input_Selcte">
                                    <option>1</option>
                                </select>
                            </div>

                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name"><span className="Red">*</span>时间：</div>
                            <div className="BoxPopwrap_Cont01_box01Input">
                                <div className="BoxPopwrap_Cont01_box01TimeDcontrols"><img
                                    src="image/Tpic02.png" width="279"
                                    height="30"/></div>
                                <div className="BoxPopwrap_Cont01_box01 clearfix Mtop10">
                                    <div className="BoxPopwrap_Cont01_box01Date01 Mleftwd10"><input
                                        type="checkbox"
                                        className="Cont01_box01check"/>全天日程
                                    </div>
                                    <div className="BoxPopwrap_Cont01_box01Date02">
                                        <img src="image/Tpic03.png" width="189" height="30"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name"><span className="Red">*</span>负责人：
                            </div>
                            <div className="BoxPopwrap_Cont01_Addbox01Input clearfix">
                                <div className="BoxPopwrap_Cont01_Addbox01InputL With252"></div>
                                <div className="BoxPopwrap_Cont01_Addbox01InputR"></div>
                            </div>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name"><span className="MleftW15">参与人：</span>
                            </div>
                            <div className="BoxPopwrap_Cont01_Addbox01Input clearfix">
                                <div className="BoxPopwrap_Cont01_Addbox01InputL With252"></div>
                                <div className="BoxPopwrap_Cont01_Addbox01InputR"></div>
                            </div>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name"><span className="MleftW15">知会人：</span>
                            </div>
                            <div className="BoxPopwrap_Cont01_Addbox01Input clearfix">
                                <div className="BoxPopwrap_Cont01_Addbox01InputL With252"></div>
                                <div className="BoxPopwrap_Cont01_Addbox01InputR"></div>
                            </div>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name"><span className="MleftW15">创建人：</span>
                            </div>
                            <div className="BoxPopwrap_Cont01_Addbox01Input clearfix">
                                <div className="BoxPopwrap_Cont01_Addbox01InputL With252"></div>
                                <div className="BoxPopwrap_Cont01_Addbox01InputR"></div>
                            </div>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name">关联业务：</div>
                            <div className="BoxPopwrap_Cont01_box01Input ">
                                <input type="text" className="Cont01_box01Input_k01 With273"
                                       placeholder="请输入客户名称"/>
                                <input type="text" className="Cont01_box01Input_k01 With273"
                                       placeholder="请输入客户地址"/>
                            </div>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name"><span className="MleftW15">地址：</span>
                            </div>
                            <div className="BoxPopwrap_Cont01_box01Input ">
                                <input type="text" className="Cont01_box01Input_k01 With273"
                                       placeholder="请输入客户名称"/>
                            </div>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name">任务等级：</div>
                            <ul className="BoxPopwrap_Cont01_box01Radio clearfix">
                                <li><input type="radio"/>高</li>
                                <li><input type="radio"/>中</li>
                                <li><input type="radio"/>低</li>
                            </ul>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name">提醒时间：</div>
                            <div className="BoxPopwrap_Cont01_box01Input">
                                <select className="BoxPopwrap_Cont01_box01Input_Selcte">
                                    <option>1</option>
                                </select>
                            </div>

                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name">任务描述：</div>
                            <div className="Mwidth274">
                                <textarea>1</textarea>

                            </div>
                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name">任务来源：</div>
                            <div className="BoxPopwrap_Cont01_box01Input">
                                <select className="BoxPopwrap_Cont01_box01Input_Selcte">
                                    <option>1</option>
                                </select>
                            </div>

                        </div>
                        <div className="BoxPopwrap_Cont01_box01 clearfix">
                            <div className="BoxPopwrap_Cont01_box01Name">附件：</div>
                            <div className="BoxPopwrap_Cont01_box01Input"><a>添加附件</a></div>
                        </div>
                    </div>


                </EditDialog>
            </div>
        );
    }
}







const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);


const Tree_Demo = React.createClass({
    getDefaultProps() {
        return {
            multiple: true,
        };
    },
    getInitialState() {
        return {
            expandedKeys: ['0-0-0', '0-0-1'],
            autoExpandParent: true,
            checkedKeys: ['0-0-0'],
            selectedKeys: [],
        };
    },
    onExpand(expandedKeys) {
        console.log('onExpand', arguments);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded chilren keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    },
    onCheck(checkedKeys) {
        this.setState({
            checkedKeys,
            selectedKeys: ['0-3', '0-4'],
        });
    },
    onSelect(selectedKeys, info) {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    },
    render() {
        const loop = data => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={item.key} />;
        });
        return (
            <Tree checkable multiple={this.props.multiple}
                  onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}
                  autoExpandParent={this.state.autoExpandParent}
                  onCheck={this.onCheck} checkedKeys={this.state.checkedKeys}
                  onSelect={this.onSelect} selectedKeys={this.state.selectedKeys}
            >
                {loop(gData)}
            </Tree>
        );
    },
});


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            hasPop: true
        }
    }

    componentDidMount() {
        const _this = this
        reqwest({
            url: 'api/western',
            type: 'json',
            method: 'get',


            success: function (response) {

                if (response.success) {
                    _this.setState({
                        historyItems: response.data.history
                    })
                }
            }

        })
    }

    togglePop = () => {
        this.setState({
            hasPop: !this.state.hasPop
        })
    }
    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {

        return (
            <div style={{margin: 30}}>

                <div className="jane-input-number">
                    <div className="jane-input-number-handle-wrap">
                        <a href="javascript:;" className="jane-input-number-handler jane-input-number-handler-up">
                            <span className="jane-input-number-handler-up-inner"></span>
                        </a>
                        <a href="javascript:;" className="jane-input-number-handler jane-input-number-handler-down">
                            <span className="jane-input-number-handler-down-inner"></span>
                        </a>

                    </div>
                    <div className="jane-input-number-input-wrap">
                        <input type="text" className="jane-input-number-input"/>
                    </div>

                </div>


                <button onClick={this.togglePop}>toggle popup</button>

                {this.state.hasPop ? (<JanePopup
                    content={[<div>popTitle</div>, <input type="text" value={this.state.value}  onChange = {this.handleInputChange}/>, <div>popContent</div>]}>
                    <button name="popTrigger">click me</button>
                </JanePopup>) : null}


                <Popover content={(<div><input type="text"/></div>)} trigger="click">
                    <button >1111</button>

                </Popover>


                <div>
                    <p>ooooooo</p>
                </div>

                <div children={[(<div>your name</div>), (<div>my name</div>)]}></div>

                <div style={style}>
                    my custom div
                </div>
                <EditDialog_Demo/>

                <Tree_Demo />

            </div>)

    }
};

