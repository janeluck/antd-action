import ReactDOM from 'react-dom';
import React from 'react';
import { Menu, Icon, Switch, Row, Col, Buttonn, Input,DatePicker, Button, Tree, Modal,TimePicker  } from 'antd';
const TreeNode = Tree.TreeNode
const   CheckTreeDemo = React.createClass({
    getDefaultProps() {
        return {
            keys: [],
        };
    },
    getInitialState() {
        const keys = this.props.keys;
        return {
            keys: keys,
        };
    },
    onSelect(info) {
        console.log('selected', info);
    },
    onCheck(info) {
        console.log('onCheck', info);
        this.setState({
            keys: info
        })
    },
    render() {
        return (
            <Tree className="myCls" showLine checkable
                  checkedKeys={this.state.keys}
                  onSelect={this.onSelect} onCheck={this.onCheck}
                  checkStrictly
            >
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled>
                        <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    },
});

export {
    CheckTreeDemo
}