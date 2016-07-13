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

const  loopAllChildren = function(childs, callback, parent) {
    const loop = (children, level, _parent) => {
        const len = getChildrenlength(children);
        React.Children.forEach(children, (item, index) => {
            const pos = `${level}-${index}`;
            if (item.props.children && item.type && item.type.isTreeNode) {
                loop(item.props.children, pos, { node: item, pos });
            }
            callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
        });
    };
    loop(childs, 0, parent);
}



// todo: 部门树假数据
let oldData = [
    {
        "ID": "391",
        "Name": "全公司",
        "ParentID": "0",
        "StopFlag": "0",
        "Code": "",
        "Children": [
            {
                "ID": "2878",
                "Name": "我们都是90后",
                "ParentID": "391",
                "StopFlag": "0",
                "Code": "",
                "Children": [
                    {
                        "ID": "2892",
                        "Name": "麻辣烫队",
                        "ParentID": "2878",
                        "StopFlag": "0",
                        "Code": ""
                    },
                    {
                        "ID": "392",
                        "Name": "火锅队",
                        "ParentID": "2878",
                        "StopFlag": "0",
                        "Code": "001"
                    }
                ]
            },
            {
                "ID": "396",
                "Name": "营销中心",
                "ParentID": "391",
                "StopFlag": "0",
                "Code": "005",
                "Children": [
                    {
                        "ID": "651",
                        "Name": "销售中心",
                        "ParentID": "396",
                        "StopFlag": "0",
                        "Code": "",
                        "Children": [
                            {
                                "ID": "652",
                                "Name": "史浩团",
                                "ParentID": "651",
                                "StopFlag": "1",
                                "Code": "",
                                "Children": [
                                    {
                                        "ID": "411",
                                        "Name": "广东分公司",
                                        "ParentID": "652",
                                        "StopFlag": "0",
                                        "Code": ""
                                    }
                                ]
                            },
                            {
                                "ID": "654",
                                "Name": "S团",
                                "ParentID": "651",
                                "StopFlag": "0",
                                "Code": "",
                                "Children": [
                                    {
                                        "ID": "411222",
                                        "Name": "XG分公司",
                                        "ParentID": "654",
                                        "StopFlag": "0",
                                        "Code": "",
                                        "Children": [
                                            {
                                                "ID": "4112221",
                                                "Name": "0周震团",
                                                "ParentID": "411222",
                                                "StopFlag": "0",
                                                "Code": ""
                                            }, {
                                                "ID": "4112222",
                                                "Name": "1周震团",
                                                "ParentID": "411222",
                                                "StopFlag": "0",
                                                "Code": ""
                                            }, {
                                                "ID": "4112223",
                                                "Name": "2周震团",
                                                "ParentID": "411222",
                                                "StopFlag": "0",
                                                "Code": ""
                                            }, {
                                                "ID": "4112224",
                                                "Name": "3周震团",
                                                "ParentID": "411222",
                                                "StopFlag": "0",
                                                "Code": ""
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                "ID": "653",
                                "Name": "周震团",
                                "ParentID": "651",
                                "StopFlag": "0",
                                "Code": ""
                            }
                        ]
                    },
                    {
                        "ID": "402",
                        "Name": "天津分公司",
                        "ParentID": "396",
                        "StopFlag": "0",
                        "Code": ""
                    },
                    {
                        "ID": "403",
                        "Name": "深圳分公司",
                        "ParentID": "396",
                        "StopFlag": "0",
                        "Code": ""
                    },
                    {
                        "ID": "404",
                        "Name": "四川分公司",
                        "ParentID": "396",
                        "StopFlag": "0",
                        "Code": ""
                    },
                    {
                        "ID": "412",
                        "Name": "上海分公司",
                        "ParentID": "396",
                        "StopFlag": "0",
                        "Code": ""
                    },
                    {
                        "ID": "413",
                        "Name": "北京分公司",
                        "ParentID": "396",
                        "StopFlag": "1",
                        "Code": ""
                    },
                    {
                        "ID": "414",
                        "Name": "河北分公司",
                        "ParentID": "396",
                        "StopFlag": "0",
                        "Code": ""
                    },
                    {
                        "ID": "422",
                        "Name": "安徽分公司",
                        "ParentID": "396",
                        "StopFlag": "0",
                        "Code": ""
                    },
                    {
                        "ID": "393",
                        "Name": "超客事业部",
                        "ParentID": "396",
                        "StopFlag": "0",
                        "Code": "002"
                    }
                ]
            }
        ]
    }
]

const gData = [{
    "U8ID": 0,
    "Name": "全公司",
    "ParentID": "0",
    "Existing": 0,
    "Children": [{"U8ID": "01", "Name": "总裁会", "ParentID": "0", "Existing": 0, "Children": []}, {
        "U8ID": "02",
        "Name": "服务中心",
        "ParentID": "0",
        "Existing": 0,
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
            "Children": []
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

let obj =[]
function convertData(childs, level){
    childs.forEach((child, index)=>{
        const pos = `${level}-${index}`
        obj.push(pos)
        convertData(child.Children, pos)
    })
}
convertData(gData, 0)
console.log(obj)

const Tree_Demo = React.createClass({
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
    onRelatedChange(e){

        const checked = e.target.checked
        this.setState({
            checkedKeys: [],
            isRelated: checked
        });
    },
    onCheck(checkedKeys, obj){
        console.log(obj)
        // todo
        if (this.state.isRelated) {
            if (obj.checked) {
                // checkedKeys = this.getChildrenKeys(obj.checkedNodes)
            }

        }

        this.setState({
            checkedKeys
        });
    },

    getChildrenKeys(checkedNodes){
        // todo
        /*    const loop = nodes => nodes.map((item) => {
         if (item.props.children) {
         loop(item.props.children)
         }
         keys.push(item.key)

         })
         let keys = [];
         loop(checkedNodes)
         return keys*/
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
                            ...others
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

        loopAllChildren(this.refs.tree.props.children, (item, index, pos, keyOrPos, siblingPosition)=>{

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


        ReactDOM.unstable_renderSubtreeIntoContainer(this, <Tree defaultExpandAll>
            {loop(this.getRightTreeData())}
        </Tree>, document.getElementById('doubleTree-right'), ()=> {
            // 动画效果
            document.getElementById('doubleTree-right').className = 'move-left-enter move-left-enter-active'
            setTimeout(()=> {
                document.getElementById('doubleTree-right').className = '';
            }, 500)
        })


    },


    render() {
        const loop = data => data.map((item) => {
            const isDisabled = item.Existing === '1' ? {
                disableCheckbox: true,
                className: 'ant-tree-treenode-disabled'
            } : {}
            if (item.Children.length ) {
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

                                <Tree ref="tree"
                                    checkable multiple checkStrictly
                                      checkedKeys={this.state.checkedKeys}
                                      onCheck={this.onCheck}>
                                    {loop(gData)}
                                </Tree>

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
                                <div id="doubleTree-right">

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>




        );
    },
});

export  default Tree_Demo;