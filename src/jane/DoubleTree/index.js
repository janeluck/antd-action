/**
 * Created by janeluck on 7/8/16.
 */
import React from 'react';

import {Tree, Transfer, Button } from 'antd';
import './index.less'
const TreeNode = Tree.TreeNode;
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

            <div>



            <div className="ck-doubleTree">
                <div className="ant-transfer">
                    <div className="ant-transfer-list">
                        <div className="ant-transfer-list-header">
                            <span>U8组织架构</span>


                        </div>
                        <div className="ant-transfer-list-body">

                            <Tree checkable multiple={this.props.multiple}
                                  onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}
                                  autoExpandParent={this.state.autoExpandParent}
                                  onCheck={this.onCheck} checkedKeys={this.state.checkedKeys}
                                  onSelect={this.onSelect} selectedKeys={this.state.selectedKeys}

                            >
                                {loop(gData)}
                            </Tree>

                        </div>

                    </div>
                    <div className="ant-transfer-operation">
                        <button  type="button" className="ant-btn ant-btn-primary ant-btn-sm">
                            <span>
                                <i className="anticon anticon-right"></i>
                            </span>
                        </button>
                    </div>
                    <div className="ant-transfer-list">
                        <div className="ant-transfer-list-header">
                            <span>已选择的组织架构</span>


                        </div>
                        <div className="ant-transfer-list-body"></div>

                    </div>
                </div>
            </div>

                <Transfer />



            </div>




        );
    },
});

export  default Tree_Demo;