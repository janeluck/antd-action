import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';
import classNames from 'classnames';
import { Router, Route, Link, browserHistory} from 'react-router'

import InputUserDemo from '../demo'
import UploadDemo from '../jane/UploadDemo'
import JanePromise from '../jane/Promises/JanePromise'

import reqwest from 'reqwest'

import DemoCKUpload from '../jane/CKUpload/demo'
import Immutable from 'Immutable'

import { Menu, Icon, Switch, Row, Col, Buttonn, Input,DatePicker, Button, Tree, Modal,TimePicker  } from 'antd';
import '../component/App.less';
import '../jane/styles/style/index.less';


import '../jane/Class'


import * as a from '../jane/modules/lib1'

import DeptDemo from '../jane/Dept'
import SelectItem from '../jane/SelectItem'

const SubMenu = Menu.SubMenu;

const Sider = React.createClass({

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    },
    render() {
        return (
            <div>
                <br />
                <br />
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 240 }}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                        <Menu.Item key="1"><Link to='/app'>App</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/input'>Input</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/upload'>Upload</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                        <Menu.Item key="5">选项5</Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                        <SubMenu key="sub3" title="三级导航">
                            <Menu.Item key="7">选项7</Menu.Item>
                            <Menu.Item key="8">选项8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    },
});
const TreeNode = Tree.TreeNode

const Page = React.createClass({
    render() {
        return (



            <div>
                <Row>
                    <Col span={6}>

                        <Sider />
                    </Col>
                    <Col span={18}>
                        {this.props.children}

                    </Col>
                </Row>
            </div>



        )
    }
})
const NoMatch = React.createClass({
    render() {
        return (<div>no match</div>)
    }
})

const Dialog = Modal
// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).


function handleClick() {
    console.log(arguments)
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
        tns.push({title: key, key});
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


generateData(z)
console.log(gData)

const style = {
    icon: {
        color: '#2790e3',
        fontWeight: 'bold'
    },
    treeTitle: {}
}


const loopAction = function (data, key, callback) {
    data.forEach((item, index, arr) => {

        if (item.key === key) {
            return callback(item, index, arr);
        }
        if (item.children) {
            return loopAction(item.children, key, callback);
        }
    });
}


let noChildKeys = []
const getNoChildKeys = function (data) {
    data.forEach((item, index, arr) => {

        if (item.children) {
            getNoChildKeys(item.children)
        } else {
            noChildKeys.push(item.key)
        }
    })
}
getNoChildKeys(gData)
console.log('nochildkeys:')
console.log(noChildKeys)

const Demo = React.createClass({
    getInitialState() {
        return {
            gData,
            expandedKeys: [],
        };
    },
    getCustomTitle(item){
        return (<span className="systemManage-deptTree-title">

            <span>{item.title}</span>
            <span>
                <span onClick={this.handleAdd}><Icon style={style.icon} type="plus-circle"/></span>
                <span onClick={this.handleEdit}><Icon style={style.icon} type="edit"/></span>
                <span onClick={this.handleDelete}><Icon style={style.icon} type="cross"/></span>
            </span>


        </span>)
    },
    onDragEnter(info) {
        console.log(info);
        // expandedKeys 需要受控时设置
        // this.setState({
        //   expandedKeys: info.expandedKeys,
        // });
    },
    onDrop(info) {
        console.log(info);
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        // const dragNodesKeys = info.dragNodesKeys;
        const loop = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loop(item.children, key, callback);
                }
            });
        };
        const data = [...this.state.gData];
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (info.dropToGap) {
            let ar;
            let i;
            loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            ar.splice(i, 0, dragObj);
        } else {
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.children.push(dragObj);
            });
        }
        this.setState({
            gData: data,
        });
    },
    onSelect(selectedKeys, info){
        this.selectNode = info.node
        this.selKey = info.node.props.eventKey;
    },

    handleAdd(){

        let data = [...this.state.gData]
        let expandedKeysSet = new Set(this.state.expandedKeys)

        const that = this
        setTimeout(()=> {
            loopAction(data, that.selKey, (item, index, arr)=> {

                if (!item.children) item.children = []
                item.children.push({
                    key: `${that.selKey}-${item.children.length}`,
                    title: `${that.selKey}-${item.children.length}`
                })

            })
            that.setState({
                gData: data,
                // 增加新的子节点后打开该节点
                expandedKeys: Array.from(expandedKeysSet.add(that.selKey))
            });
        }, 0)


    },
    handleEdit(){
        let data = [...this.state.gData]

        const that = this
        setTimeout(()=> {
            console.log(that.selKey)
            loopAction(data, this.selKey, (item, index, arr)=> {
                item.title = 'i am new'
            })
            that.setState({
                gData: data,
            });

        }, 0)
    },
    handleDelete(){
        let data = [...this.state.gData]

        const that = this
        setTimeout(()=> {
            console.log(that.selKey)
            loopAction(data, this.selKey, (item, index, arr)=> {
                arr.splice(index, 1)
            })
            that.setState({
                gData: data,
            });

        }, 0)

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
    render() {

        const loop = data => data.map((item) => {
            if (item.children && item.children.length) {
                return <TreeNode key={item.key} title={this.getCustomTitle(item)}>{loop(item.children)}</TreeNode>;
            }
            return <TreeNode key={item.key} title={this.getCustomTitle(item)}/>;
        });
        return (
            <Tree
                onSelect={this.onSelect}
                expandedKeys={this.state.expandedKeys}
                onExpand={this.onExpand}>
                {loop(this.state.gData)}
            </Tree>
        );
    },
});


Modal.common = function (config) {
    const props = Object.assign({
        content: (<div></div>),
        okText: 'ok',
        cancelText: 'cancel'
    }, config);
    let div = document.createElement('div');
    document.body.appendChild(div);

    let d;
    props.iconType = props.iconType || 'question-circle';

    let width = props.width || 416;
    let style = props.style || {};

    // 默认为 true，保持向下兼容
    if (!('okCancel' in props)) {
        props.okCancel = true;
    }


    function close() {
        d.setState({
            visible: false,
        });
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
    }

    function onCancel() {
        let cancelFn = props.onCancel;
        if (cancelFn) {
            let ret;
            if (cancelFn.length) {
                ret = cancelFn(close);
            } else {
                ret = cancelFn();
                if (!ret) {
                    close();
                }
            }
            if (ret && ret.then) {
                ret.then(close);
            }
        } else {
            close();
        }
    }

    function onOk() {
        let okFn = props.onOk;
        if (okFn) {
            let ret;
            if (okFn.length) {
                ret = okFn(close);
            } else {
                ret = okFn();
                if (!ret) {
                    close();
                }
            }
            if (ret && ret.then) {
                ret.then(close);
            }
        } else {
            close();
        }
    }

    let body = props.content;

    let footer = null;
    if (props.okCancel) {
        footer = (
            <div className="ant-confirm-btns">
                <Button type="ghost" size="large" onClick={onCancel}>
                    {props.cancelText}
                </Button>
                <Button type="primary" size="large" onClick={onOk}>
                    {props.okText}
                </Button>
            </div>
        );
    } else {
        footer = (
            <div className="ant-confirm-btns">
                <Button type="primary" size="large" onClick={onOk}>
                    {props.okText}
                </Button>
            </div>
        );
    }

    const classString = classNames({
        'ant-confirm': true,
        [`ant-confirm-${props.type}`]: true,
        [props.className]: !!props.className,
    });

    ReactDOM.render(
        <Dialog
            className={classString}
            visible
            closable={false}
            title=""
            transitionName="zoom"
            footer=""
            maskTransitionName="fade"
            style={style}
            width={width}
        >
            <div style={{ zoom: 1, overflow: 'hidden' }}>{body} {footer}</div>
        </Dialog>
        , div, function () {
            d = this;
        });

    return {
        destroy: close,
    };
}


function newArray(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function disabledHours() {
    const hours = newArray(0, new Date().getHours());
    return hours;
}

function disabledMinutes(h) {
    if (h === new Date().getHours()) {
        return newArray(0, new Date().getMinutes());
    }
    return [];
}


const RangePicker = DatePicker.RangePicker;

function onChange(value, dateString) {
    console.log('From: ', value[0], ', to: ', value[1]);
    console.log('From: ', dateString[0], ', to: ', dateString[1]);
}


const disabledStartDate = (startValue) => {
        if (!startValue || !this.state.endValue) {
            return false;
        }
        return startValue.getTime() >= this.state.endValue.getTime();
    },
    disabledEndDate = (endValue)=> {
        if (!endValue || !this.state.startValue) {
            return false;
        }
        return endValue.getTime() <= this.state.startValue.getTime();
    },
    onStartChange = function () {
        console.log(arguments)
    }

    ,
    onEndChange = function () {
        console.log(arguments)
    }


class TaskDatePicker extends React.Component {
    constructor() {
        super()
        this.state = {

            startDateTime: new Date,
            endDateTime: new Date
        }

    }

    disabledStartDate = (current)=> {

        return current && current.getTime() < Date.now() - 24 * 60 * 60 * 1000;
    }
    disabledEndDate = (endTime)=> {

        const timeDate = new Date(Date.parse(this.state.startDateTime.replace(/-/g, "/")));
        return endTime.getTime() <= timeDate.getTime();
    }

    newArray(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }
    isToday(){
        const startDate = new Date(this.state.startDateTime), now = new Date()
        return ['getFullYear', 'getMonth', 'getDate'].every(method =>{
            return now[method]() == startDate[method]()
        })

    }

    disabledHours = ()=> {

        if (this.isToday()) {
            return this.newArray(0, new Date().getHours())
        }
        return []
    }
    disabledMinutes = (h)=> {
        if (this.isToday() && h === new Date().getHours()){
            return this.newArray(0, new Date().getMinutes());
        }

        return [];
    }

    onStartChange = (date, dateString) => {

        this.setState({
            startDateTime: dateString
        })
    }

    onEndChange = (date, dateString)=> {
        this.setState({
            endDateTime: dateString
        })
    }


    render() {


        return (<div>
            <DatePicker

                showTime={
                    {
                        disabledHours: this.disabledHours,
                        disabledMinutes: this.disabledMinutes
                    }
                }
                value={this.state.startDateTime}
                format="yyyy-MM-dd HH:mm:ss"
                placeholder="开始日期"
                onChange={this.onStartChange}
                disabledDate={this.disabledStartDate}

            />
            <DatePicker
                showTime
                value={this.state.endDateTime}
                format="yyyy-MM-dd HH:mm:ss"
                disabledDate={this.disabledEndDate}
                placeholder="结束日期"
                onChange={this.onEndChange}

            />
        </div>);
    }
}

ReactDOM.render(<div>
        <div>
            <UploadDemo />
        </div>
        <SelectItem />
        {/*{
         disabledHours: ()=> {

         return newArray(0, new Date().getHours())
         },
         disabledMinutes: (h)=> {
         // console.log(h)
         if (h === new Date().getHours()) {
         return newArray(0, new Date().getMinutes());
         }
         return [];
         }
         }

         <DatePicker

         showTime
         format="yyyy-MM-dd HH:mm:ss"
         placeholder="开始日期"
         onChange={this.onStartChange}


         />
         <DatePicker

         showTime
         format="yyyy-MM-dd HH:mm:ss"

         placeholder="结束日期"
         onChange={this.onEndChange}

         />


         */}

        <TaskDatePicker />


        <div>
            <TimePicker disabledHours={disabledHours} disabledMinutes={disabledMinutes}/>
        </div>

        <div>
            <DeptDemo />
        </div>

    </div>,
    document.getElementById('react-content')
);


var p = new JanePromise(function (resolve, reject) {
    reqwest({
        url: '/api/admin',
    }).then(rs=> {
        resolve(rs)
    }, reason=> {
        reject(reason)
    })
})
p.then(data=> {
    return `this is ${data}`
}).then(data=> {
    return `this is ${data}`
}).then(data=> {
    console.log(`this is ${data}`)
})

//console.log(p.then())

//console.log('---------------------------')
//console.log(a)

