/**
 * Created by janeluck on 7/8/16.
 */
import React from 'react';

import {groupBy, without} from 'lodash'
import {Tree, Transfer, Button, Checkbox, Icon } from 'antd';
import './index.less';
const TreeNode = Tree.TreeNode;



// todo: 部门树假数据
let gData = [
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



const Tree_Demo = React.createClass({
    getDefaultProps() {
        return {

        };
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

   /*     if (this.state.isRelated) {
            if (obj.checked) {
                checkedKeys = this.getChildrenKeys(obj.checkedNodes)
            }

        }*/
        this.setState({
            checkedKeys
        });
    },

    getChildrenKeys(checkedNodes){

        const loop = nodes => nodes.map((item) => {
            if (item.props.children){
                loop(item.props.children)
            }
            keys.push(item.key)

        })
        let keys = [];
        loop(checkedNodes)
        return keys
    },


    getRightTreeData(){
        const keys = this.state.checkedKeys
        let treeData = [];
/*        const loop = (item, parent) => {

                const a = groupBy(item.Children, child => { return keys.indexOf(child.ID) >= 0})
                parent.Children = a['true']
                loop(item.Children, item)

        };*/


        const loop0 = function (item, parent) {
                if ( keys.indexOf(item.ID) >= 0) {
                    if(item.Children) {
                        parent.push(loop0(item.Children, item))
                    }else{
                        parent.push(item)
                    }

                }
        }


        const loop1 = data => data.map((item) => {
            if (keys.indexOf(item.ID) >= 0 ) {
                if ( item.Children) {
                    const {Children, ...others} = item

                    if (Children.filter(function (n) {
                            return keys.indexOf(n.ID) >= 0
                        }).length != 0) {
                        return {
                            ...others,
                            Children: loop1(Children.filter(function (n) {
                                return keys.indexOf(n.ID) >= 0
                            }))
                        }
                    }else {
                        return {
                            ...others
                        }
                    }

                } else {
                    return item
                }

            }else {
                if (item.Children) {
                    if (item.Children.filter(function (n) {
                                 return keys.indexOf(n.ID) >= 0
                        }).length != 0) {
                        return   loop1(item.Children.filter(function (n) {
                            return keys.indexOf(n.ID) >= 0
                        }))
                    }
                }
            }

        });

       ;
        console.log(loop1(gData))
        return treeData
    },
    generateRightTree(){

    },


    render() {
        const loop = data => data.map((item) => {
            const isDisabled = item.StopFlag === '1' ? {disableCheckbox: true,  className: 'ant-tree-treenode-disabled'} : {}
            if (item.Children) {
                return (
                    <TreeNode key={item.ID} title={item.Name}  {...isDisabled} >
                        {loop(item.Children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.ID} title={item.Name}  {...isDisabled}/>;
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

                                <Tree checkable multiple checkStrictly
                                      checkedKeys={this.state.checkedKeys}
                                      onCheck={this.onCheck}>
                                    {loop(gData)}
                                </Tree>

                            </div>

                        </div>
                        <div className="ant-transfer-operation">

                            <Button onClick={this.getRightTreeData} size="small" icon="right" type="primary"/>
                        </div>
                        <div className="ant-transfer-list">
                            <div className="ant-transfer-list-header">
                                <span>已选择的组织架构</span>


                            </div>
                            <div className="ant-transfer-list-body">


                            </div>

                        </div>
                    </div>
                </div>


            </div>




        );
    },
});

export  default Tree_Demo;