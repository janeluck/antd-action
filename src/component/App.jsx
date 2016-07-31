import React from 'react';
import {Timeline, Input, Select, InputNumber, Popover, Button, Icon, Modal, Spin} from 'antd';


import reqwest from 'reqwest'
import JanePopup from '../jane/JanePopup'
import EditDialog from '../jane/EditDialog'
import U8_DoubleTree from '../jane/DoubleTree'
import JaneButton from '../jane/Button'
import InputUser from '../jane/InputUser'
import '../jane/modules/test'
import  { Component } from 'react';
const Option = Select.Option;


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
   // console.log(`selected ${value}`);
}


class EditDialog_Demo extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            visible: false,
            doubleTreeVisible: false,
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
                {this.state.visible ? <Button disabled>新建任务</Button> :
                    <Button onClick={this.onclick} type="primary">新建任务</Button>}

                <EditDialog
                    visible={this.state.visible}
                    title="新建任务"
                    onClose={()=>{
                        this.setState({
                            visible: false
                        })
                    }}>

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
    openDoubleTree = ()=> {
        this.setState({
            doubleTreeVisible: true
        })
    }
    onClose = ()=> {
        this.setState({
            doubleTreeVisible: false
        })
    }

    handleTreeValue = (value)=> {
        console.log(`treedatavalue:`)
        console.log(value)

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

                <InputUser />
                <Select multiple>

                </Select>
                <div>
                    <Icon type="user" style={{fontSize: 14}}></Icon>
                    <Icon type="plus" style={{fontSize: 8}}></Icon>
                </div>

                <div children={[(<div>your name</div>), (<div>my name</div>)]}></div>

                <div style={style}>
                    my custom div
                </div>
                <JaneButton/>
                <EditDialog_Demo/>

                <Button onClick={this.openDoubleTree}>openDoubleTree</Button>


                <div className="ck-u8Dept">
                    <div className="ck-u8Dept-step">
                        <Button shape="circle" type="primary" size="small">1</Button>
                        <a >导入U8通讯录</a>
                        <span>|</span>
                        <span>跳转到U易联进行U8人员的导入. 操作成功后U8的人员将会同步到企业空间.</span>
                    </div>

                    <div className="ck-u8Dept-stepIcon">
                        <Icon type="double-right"></Icon>
                    </div>
                    <div className="ck-u8Dept-step">
                        <Button shape="circle" type="primary" size="small">2.1</Button>
                        <a onClick={this.openDoubleTree} href="javascript:;">导入U8部门</a>
                        <span>|</span>
                        <span>将U8部门档案的数据同步更新到超客营销.</span>
                    </div>
                    <div className="ck-u8Dept-step">
                        <Button shape="circle" type="primary" size="small">2.2</Button>
                        <a>同步部门名称</a>
                        <span>|</span>
                        <span>当导入部门后U8名称发生变化时, 可随时同步修改后的部门名称到超客营销</span>
                    </div>

                    <div className="ck-u8Dept-stepIcon">
                        <Icon type="double-right"></Icon>
                    </div>
                    <div className="ck-u8Dept-step">
                        <Button shape="circle" type="primary" size="small">3</Button>
                        <a>分配部门员工</a>
                        <span>|</span>
                        <span>进入后台管理 - 超客营销的权限组织架构, 在部门增加部门员工时添加选择U8人员.</span>
                    </div>
                </div>



                <div className="ck-u8Dept-spinWrap">

                    <Spin size="large"/>
                    <p>加载中...</p>
                </div>
                {this.state.doubleTreeVisible ? (

                        <Modal width={600}
                               title="TestDemo" visible={this.state.doubleTreeVisible}
                               onOk={this.handleOk} onClose={this.onClose}>
                            <U8_DoubleTree onChange={this.handleTreeValue} />
                            <Spin />
                        </Modal>
                ) : null}
            </div>)
    }
};

