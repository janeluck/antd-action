/**
 * Created by janeluck on 7/8/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
//import Animate from 'rc-animate';

import {groupBy, without} from 'lodash'
import {Tree, Transfer, Button, Checkbox, Icon } from 'antd';
import './index.less';
const TreeNode = Tree.TreeNode;
function getChildrenlength(children) {
    let len = 1;
    if (Array.isArray(children)) {
        len = children.length;
    }
    return len;
}

function getSiblingPosition(index, len, siblingPosition) {
    if (len === 1) {
        siblingPosition.first = true;
        siblingPosition.last = true;
    } else {
        siblingPosition.first = index === 0;
        siblingPosition.last = index === len - 1;
    }
    return siblingPosition;
}

const loopAllChildren = function (childs, callback, parent) {
    const loop = (children, level, _parent) => {
        const len = getChildrenlength(children);
        React.Children.forEach(children, (item, index) => {
            const pos = `${level}-${index}`;
            if (item.props.children && item.type && item.type.isTreeNode) {
                loop(item.props.children, pos, {node: item, pos});
            }
            callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
        });
    };
    loop(childs, 0, parent);
}


const gData = [{
    "U8ID": 0,
    "Name": "全公司",
    "ParentID": "0",
    "Existing": 0,
    "Children": [{"U8ID": "01", "Name": "总裁会", "ParentID": "0", "Existing": 0, "Children": []}, {
        "U8ID": "02",
        "Name": "服务中心",
        "ParentID": "0",
        "Existing": 1,
        "Children": [{
            "U8ID": "0201",
            "Name": "电话服务部",
            "ParentID": "02",
            "Existing": 0,
            "Children": []
        }, {"U8ID": "0202", "Name": "现场服务部", "ParentID": "02", "Existing": 0, "Children": []}]
    }, {
        "U8ID": "03",
        "Name": "营销中心",
        "ParentID": "0",
        "Existing": 0,
        "Children": [{"U8ID": "0301", "Name": "市场部", "ParentID": "03", "Existing": 0, "Children": []}, {
            "U8ID": "0302",
            "Name": "销售部",
            "ParentID": "03",
            "Existing": 0,
            "Children": [
                {"U8ID": "030201", "Name": "销售分部1", "ParentID": "0302", "Existing": 0, "Children": []}, {
                    "U8ID": "030202",
                    "Name": "销售分部2",
                    "ParentID": "0302",
                    "Existing": 0,
                    "Children": []
                }, {"U8ID": "030203", "Name": "销售分部3", "ParentID": "0302", "Existing": 0, "Children": []}, {
                    "U8ID": "030204",
                    "Name": "销售分部4",
                    "ParentID": "0302",
                    "Existing": 0,
                    "Children": [

                        {
                            "U8ID": "03020401",
                            "Name": "销售分部4子部门销售分部4子部门001",
                            "ParentID": "030204",
                            "Existing": 0,
                            "Children": []
                        }, {
                            "U8ID": "03020402",
                            "Name": "销售分部4子部门销售分部4子部门002",
                            "ParentID": "030204",
                            "Existing": 0,
                            "Children": []
                        }, {
                            "U8ID": "03020403",
                            "Name": "销售分部4子部门销售分部4子部门003",
                            "ParentID": "030204",
                            "Existing": 0,
                            "Children": []
                        }, {
                            "U8ID": "03020404",
                            "Name": "销售分部4子部门销售分部4子部门004",
                            "ParentID": "030204",
                            "Existing": 0,
                            "Children": [

                                {
                                    "U8ID": "0302040401",
                                    "Name": "销售分部4子部门004子部门01",
                                    "ParentID": "03020404",
                                    "Existing": 0,
                                    "Children": []
                                }
                            ]
                        }

                    ]
                }


            ]
        }, {"U8ID": "0303", "Name": "订单中心", "ParentID": "03", "Existing": 0, "Children": []}, {
            "U8ID": "0304",
            "Name": "电子商务",
            "ParentID": "03",
            "Existing": 0,
            "Children": []
        }]
    }, {
        "U8ID": "04",
        "Name": "供应中心",
        "ParentID": "0",
        "Existing": 0,
        "Children": [{"U8ID": "0401", "Name": "采购部", "ParentID": "04", "Existing": 0, "Children": []}, {
            "U8ID": "0402",
            "Name": "仓储部",
            "ParentID": "04",
            "Existing": 0,
            "Children": []
        }, {"U8ID": "0403", "Name": "委外部", "ParentID": "04", "Existing": 0, "Children": []}, {
            "U8ID": "0404",
            "Name": "质检部",
            "ParentID": "04",
            "Existing": 0,
            "Children": []
        }]
    }, {
        "U8ID": "05",
        "Name": "生产中心",
        "ParentID": "0",
        "Existing": 0,
        "Children": [{"U8ID": "0501", "Name": "一车间", "ParentID": "05", "Existing": 0, "Children": []}, {
            "U8ID": "0502",
            "Name": "二车间",
            "ParentID": "05",
            "Existing": 0,
            "Children": []
        }, {"U8ID": "0503", "Name": "三车间", "ParentID": "05", "Existing": 0, "Children": []}, {
            "U8ID": "0504",
            "Name": "设备动力部",
            "ParentID": "05",
            "Existing": 0,
            "Children": []
        }]
    }, {
        "U8ID": "06",
        "Name": "技术中心",
        "ParentID": "0",
        "Existing": 0,
        "Children": [{"U8ID": "0601", "Name": "质量部", "ParentID": "06", "Existing": 0, "Children": []}, {
            "U8ID": "0602",
            "Name": "设计部",
            "ParentID": "06",
            "Existing": 0,
            "Children": []
        }]
    }, {
        "U8ID": "07",
        "Name": "财务中心",
        "ParentID": "0",
        "Existing": 0,
        "Children": [{"U8ID": "0701", "Name": "财务部", "ParentID": "07", "Existing": 0, "Children": []}, {
            "U8ID": "0702",
            "Name": "预算部",
            "ParentID": "07",
            "Existing": 0,
            "Children": []
        }]
    }, {
        "U8ID": "09",
        "Name": "运营中心",
        "ParentID": "0",
        "Existing": 0,
        "Children": [{"U8ID": "0901", "Name": "行政部", "ParentID": "09", "Existing": 0, "Children": []}, {
            "U8ID": "0902",
            "Name": "人力资源部",
            "ParentID": "09",
            "Existing": 1,
            "Children": []
        }, {"U8ID": "0903", "Name": "信息部", "ParentID": "09", "Existing": 0, "Children": []}]
    }, {
        "U8ID": "10",
        "Name": "上海分公司",
        "ParentID": "0",
        "Existing": 0,
        "Children": [{
            "U8ID": "1001",
            "Name": "区域销售部",
            "ParentID": "10",
            "Existing": 1,
            "Children": []
        }, {"U8ID": "1002", "Name": "服务部", "ParentID": "10", "Existing": 0, "Children": []}]
    }, {"U8ID": "11", "Name": "项目基建部", "ParentID": "0", "Existing": 0, "Children": []}]
}]

let obj = []
let keysCollectObj = []
function convertData(childs, level) {
    childs.forEach((child, index)=> {
        const pos = `${level}-${index}`
        obj.push(pos)
        convertData(child.Children, pos)
    })
}
convertData(gData, 0)
console.log(obj)


function convertkeysCollect1(childs, o) {
    childs.forEach((item)=> {
        keysCollectObj[item.U8ID] = [
            item.U8ID
        ];

        if (o) {
            o.push(item.U8ID)
        }
        if (item.Children.length) {
            convertkeysCollect(item.Children, o)
            convertkeysCollect(item.Children, keysCollectObj[item.U8ID])
        }

    })
}

function convertkeysCollect(childs, o, p) {
    childs.forEach((item)=> {
        keysCollectObj[item.U8ID] = [
            item.U8ID
        ];

        if (o) {
            o.push(item.U8ID)
        }


        convertkeysCollect(item.Children, o)
        convertkeysCollect(item.Children, keysCollectObj[item.U8ID])


    })
}




convertkeysCollect(gData)
console.log(keysCollectObj)


const U8_DouleTree = React.createClass({
    getDefaultProps() {
        return {};
    },
    getInitialState() {
        return {
            isRelated: false,
            checkedKeys: [],
            rightTree: []

        };
    },
    componentDidMount(){
        this.rightTreeWrap = document.getElementById('doubleTree-right')
    },
    componentWillUnmount(){
        if (this.rightTree) {
            ReactDOM.unmountComponentAtNode(this.rightTreeWrap)
        }
        // in case of memory leak
        this.rightTreeWrap = null
    },
    onRelatedChange(e){

        const checked = e.target.checked
        this.setState({

            isRelated: checked
        });
    },
    onCheck(checkedKeys, obj){


        if (this.state.isRelated) {

            const associatedKeys = this.getAssociatedKeys(obj.node)
            if (obj.checked) {
                // checkedKeys = this.getChildrenKeys(obj.checkedNodes)
                associatedKeys.forEach((item)=> {
                    if (checkedKeys.indexOf(item) == -1) {
                        checkedKeys.push(item)
                    }
                })

            } else {
                associatedKeys.forEach((item)=> {
                    if (checkedKeys.indexOf(item) > -1) {
                        checkedKeys.splice(checkedKeys.indexOf(item), 1)
                    }
                })
            }

        }

        this.setState({
            checkedKeys
        });
    },

    getAssociatedKeys(node){
        return keysCollectObj[node.props.eventKey]
    },


    getRightTreeData(){
        const keys = this.state.checkedKeys
        let treeData = [];
        const loop1 = data => data.map((item) => {
            if (keys.indexOf(item.U8ID) >= 0) {
                if (item.Children.length) {
                    const {Children, ...others} = item

                    if (Children.filter(function (n) {
                            return keys.indexOf(n.U8ID) >= 0
                        }).length != 0) {


                        loop1(Children.filter(function (n) {
                            return keys.indexOf(n.U8ID) < 0
                        }))
                        return {
                            ...others,
                            Children: loop1(Children.filter(function (n) {
                                return keys.indexOf(n.U8ID) >= 0
                            }))
                        }
                    } else {

                        loop1(Children)

                        return {
                            ...others,
                            Children: []
                        }
                    }

                } else {
                    return item
                }

            } else {
                if (item.Children.length) {

                    if (item.Children.filter(function (n) {
                            return keys.indexOf(n.U8ID) >= 0
                        }).length != 0) {

                        treeData.push(...loop1(item.Children.filter(function (n) {
                            return keys.indexOf(n.U8ID) >= 0
                        })))
                    }


                    loop1(item.Children.filter(function (n) {
                        return keys.indexOf(n.U8ID) < 0
                    }))
                }
            }

        });
        loop1(gData)
        return treeData
    },

    fromRc(){
        const checkedKeys = this.state.checkedKeys
        const treeNodesStates = {}
        const checkedPositions = [];

        loopAllChildren(this.refs.tree.props.children, (item, index, pos, keyOrPos, siblingPosition)=> {

            treeNodesStates[pos] = {
                node: item,
                key: keyOrPos,
                checked: false,
                siblingPosition,
            }
            if (checkedKeys.indexOf(keyOrPos) !== -1) {
                treeNodesStates[pos].checked = true;
                checkedPositions.push(pos);
            }
        })

        console.log(treeNodesStates)
        console.log(checkedPositions)
    },

    generateRightTree(){

        this.fromRc();

        const loop = data => data.map((item) => {

            if (item.Children.length) {
                return (
                    <TreeNode key={item.U8ID} title={item.Name}>
                        {loop(item.Children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.U8ID} title={item.Name}/>;
        });

        this.rightTree = (<Tree defaultExpandAll>{loop(this.getRightTreeData())}</Tree>)

        ReactDOM.unstable_renderSubtreeIntoContainer(this, this.rightTree, this.rightTreeWrap, ()=> {
            // 动画效果
            this.rightTreeWrap.className = 'move-left-enter move-left-enter-active'
            setTimeout(()=> {
                this.rightTreeWrap.className = '';
            }, 500)
        })


    },


    render() {
        const loop = data => data.map((item) => {
            const isDisabled = item.Existing == 1 ? {
                disableCheckbox: true
            } : {}
            if (item.Children.length) {
                return (
                    <TreeNode key={item.U8ID} title={item.Name}  {...isDisabled} >
                        {loop(item.Children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.U8ID} title={item.Name}  {...isDisabled}/>;
        });
        return (

            <div>

                <div className="ck-doubleTree">

                    <div><Checkbox onChange={this.onRelatedChange}>自动关联下级部门</Checkbox></div>

                    <div className="ant-transfer">
                        <div className="ant-transfer-list">
                            <div className="ant-transfer-list-header">
                                <span>U8组织架构</span>


                            </div>
                            <div className="ant-transfer-list-body">
                                <div className="ck-doubleTree-outer">
                                    <Tree ref="tree"
                                          defaultExpandAll
                                          checkable multiple checkStrictly
                                          checkedKeys={this.state.checkedKeys}
                                          onCheck={this.onCheck}>

                                        <TreeNode

                                            key={gData[0].U8ID} title={gData[0].Name} disableCheckbox
                                        >
                                            {loop(gData[0].Children)}
                                        </TreeNode>

                                    </Tree>
                                </div>
                            </div>

                        </div>
                        <div className="ant-transfer-operation">

                            <Button onClick={this.generateRightTree} size="small" icon="right" type="primary"/>
                        </div>
                        <div className="ant-transfer-list">
                            <div className="ant-transfer-list-header">
                                <span>已选择的组织架构</span>


                            </div>
                            <div className="ant-transfer-list-body">
                                <div className="ck-doubleTree-outer">
                                    <div id="doubleTree-right">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>




        );
    },
});

export  default U8_DouleTree;