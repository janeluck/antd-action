/**
 * Created by janeluck on 9/6/16.
 */


import ReactDOM from 'react-dom';
import React from 'react';
import classNames from 'classnames';
import { Menu, Icon, Switch, Row, Col, Buttonn, Input,Button, Tree, Modal } from 'antd';
import reqwest from 'reqwest'

const TreeNode = Tree.TreeNode
const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const Children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({title: key, key});
        if (i < y) {
            Children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    Children.forEach((key, index) => {
        tns[index].Children = [];
        return generateData(level, key, tns[index].Children);
    });
};


generateData(z)
console.log(gData)
/*[

 data
 ]*/
let keysCollect = {}
const generateKeysCollect = (_arr, _ancestors) => {

    // 生成一个ID为'-1'虚拟的总根
    if (!_ancestors){
        _ancestors = ['-1']
        keysCollect['-1'] = []
    }


    _arr.forEach(item=> {
        keysCollect[item.ID] = [item.ID]
        _ancestors.forEach(ancestor=>{
            keysCollect[ancestor].push(item.ID)
        })
        if (item.Children && item.Children.length) {
            generateKeysCollect(item.Children, _ancestors.concat(item.ID))
        }
    })
}



const style = {
    icon: {
        color: '#2790e3',
        fontWeight: 'bold'
    },
    treeTitle: {}
}


const loopAction = function (data, key, callback) {
    data.forEach((item, index, arr) => {

        if (item.ID === key) {
            return callback(item, index, arr);
        }
        if (item.Children) {
            return loopAction(item.Children, key, callback);
        }
    });
}


export default class Dept extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gData: [],
            expandedKeys: [],
        }
    }

    componentWillMount() {
        const that = this
        reqwest({
            // todo
            url: '/setting/scrm/getDeptTree',
            type: 'json',
            method: 'post',
            data: {}
        }).then(function (data) {
            if (data.rs) {
                console.log('keysCollect:')

                generateKeysCollect([data.data])
                console.log(keysCollect)

                that.setState({
                    gData: [data.data]
                })
            } else {
            }

        }).fail()
    }

    getCustomTitle = (item) => {
        return (<span className="systemManage-deptTree-title">

            <span>{item.Name}</span>
            <span>
                <span onClick={this.handleAdd}><Icon style={style.icon} type="plus-circle"/></span>
                <span onClick={this.handleEdit}><Icon style={style.icon} type="edit"/></span>
                <span onClick={this.handleDelete}><Icon style={style.icon} type="cross"/></span>
            </span>


        </span>)
    }

    onSelect = (selectedKeys, info)=> {
        this.selectNode = info.node
        this.selKey = info.node.props.eventKey;
    }

    handleAdd = () => {

        let data = [...this.state.gData]
        let expandedKeysSet = new Set(this.state.expandedKeys)

        const that = this
        setTimeout(()=> {
            loopAction(data, that.selKey, (item, index, arr)=> {

                if (!item.Children) item.Children = []
                item.Children.push({
                    ID: `${that.selKey}-${item.Children.length}`,
                    Name: `${that.selKey}-${item.Children.length}`
                })

            })
            that.setState({
                gData: data,
                // 增加新的子节点后打开该节点
                expandedKeys: Array.from(expandedKeysSet.add(that.selKey))
            });
        }, 0)


    }
    handleEdit = ()=> {
        let data = [...this.state.gData]

        const that = this
        setTimeout(()=> {
            console.log(that.selKey)
            loopAction(data, this.selKey, (item, index, arr)=> {
                item.Name = 'i am new'
            })
            that.setState({
                gData: data,
            });

        }, 0)
    }
    handleDelete = () => {
        let data = [...this.state.gData]

        const that = this
        setTimeout(()=> {

            loopAction(data, this.selKey, (item, index, arr)=> {
                arr.splice(index, 1)
            })
            that.setState({
                gData: data,
            });

        }, 0)

    }

    onExpand = (expandedKeys) => {

        // if not set autoExpandParent to false, if Children expanded, parent can not collapse.
        // or, you can remove all expanded chilren keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }

    render() {

        const loop = data => data.map((item) => {
            if (item.Children && item.Children.length) {
                return (<TreeNode key={item.ID}
                                  disabled={item.StopFlag == '1'}
                                  title={this.getCustomTitle(item)}>
                    {loop(item.Children)}
                </TreeNode>);
            }
            return (<TreeNode key={item.ID}
                              disabled={item.StopFlag == '1'}
                              title={this.getCustomTitle(item)}/>);
        });
        return (
            <Tree

                onSelect={this.onSelect}
                expandedKeys={this.state.expandedKeys}
                onExpand={this.onExpand}>
                {loop(this.state.gData)}
            </Tree>
        );
    }
}


const Demo = React.createClass({
    getInitialState() {
        return {
            gData,
            expandedKeys: [],
        };
    },
    getCustomTitle(item){
        return (<span className="systemManage-deptTree-title">

            <span>{item.Name}</span>
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
                if (item.ID === key) {
                    return callback(item, index, arr);
                }
                if (item.Children) {
                    return loop(item.Children, key, callback);
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
                item.Children = item.Children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.Children.push(dragObj);
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

                if (!item.Children) item.Children = []
                item.Children.push({
                    key: `${that.selKey}-${item.Children.length}`,
                    title: `${that.selKey}-${item.Children.length}`
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
                item.Name = 'i am new'
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
        // if not set autoExpandParent to false, if Children expanded, parent can not collapse.
        // or, you can remove all expanded chilren keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    },
    render() {
        console.log(2222)

        const loop = data => data.map((item) => {
            if (item.Children && item.Children.length) {
                return <TreeNode

                    key={item.ID}

                    title={this.getCustomTitle(item)}

                    disabled

                >{loop(item.Children)}</TreeNode>;
            }
            return <TreeNode
                disabled
                key={item.ID}
                title={this.getCustomTitle(item)}

            />;
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
