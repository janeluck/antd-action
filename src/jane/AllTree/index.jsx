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

/*[

 data
 ]*/
let keysCollect = {}
const generateKeysCollect = (_arr, _ancestors) => {

    // 生成一个ID为'-1'虚拟的总根
    if (!_ancestors) {
        _ancestors = ['-1']
        keysCollect['-1'] = []
    }


    _arr.forEach(item=> {
        keysCollect[item.ID] = [item.ID]
        _ancestors.forEach(ancestor=> {
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
const loop = (data, associatedKeys) => data.map((item) => {
    if (item.Children && item.Children.length) {
        return (<TreeNode key={item.ID}
                          disabled={ associatedKeys.indexOf(item.ID) > 0 }
                          title={item.Name}
        >
            {loop(item.Children, associatedKeys)}
        </TreeNode>);
    }
    return (<TreeNode key={item.ID}
                      disabled={ associatedKeys.indexOf(item.ID) > 0 }
                      title={item.Name}
    />);
});

class CheckTreeDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gData: [],
            checkedKeys: []
        }
    }

    onCheck = (checkedKeys, obj) => {


        const associatedKeys = this.getAssociatedKeys(obj.node)
        this.selKey = obj.node.props.eventKey
     /*   if (obj.checked) {
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
*/
        if (!obj.checked){
            this.selKey = ''
        }
        this.setState({
            checkedKeys: obj.checked ? associatedKeys : []
        });
    }

    getAssociatedKeys = (node)=> {
        return keysCollect[node.props.eventKey]
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


    render() {
        const currentKeysCollect = keysCollect[this.selKey] || []

        return (
            <Tree

                checkable
                checkStrictly
                onCheck={this.onCheck}
                checkedKeys={this.state.checkedKeys}
               >
                {loop(this.state.gData, currentKeysCollect)}
            </Tree>
        );
    }
}


export  {
    CheckTreeDemo
}
