/**
 * Created by jane on 13/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

function generateTreeNodes(treeNode) {
  const arr = [];
  const key = treeNode.props.eventKey;
  for (let i = 0; i < 3; i++) {
    arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  const loopLeaf = (data, lev) => {
    const l = lev - 1;
    data.forEach((item) => {
      if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
        curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  const loop = (data) => {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach((item) => {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}

export default class Demo extends React.Component {
  state = {
    treeData: [],
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        treeData: [
          { name: 'pNode 01', key: '0-0' },
          { name: 'pNode 02', key: '0-1' },
          { name: 'pNode 03', key: '0-2', isLeaf: true },
          { name: 'pNode 04', key: '0-2-123', isLeaf: true },
          { name: 'pNode 05', key: '0-2-125', isLeaf: true },
          { name: 'pNode 06', key: '0-2-123-222', isLeaf: true },
          { name: 'pNode 07', key: '0-2-123-9999', isLeaf: true },
        ],
      });
    }, 100);
  }
  onSelect = (info) => {
    console.log('selected', info);
  }
  onLoadData = (treeNode) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const treeData = [...this.state.treeData];
        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
        this.setState({ treeData });
        resolve();
      }, 1000);
    });
  }
  render() {
    const loop = data => data.map((item) => {
      if (item.children) {
        return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;
    });
    const treeNodes = loop(this.state.treeData);
    return (
      <Tree onSelect={this.onSelect} loadData={this.onLoadData}>
        {treeNodes}
      </Tree>
    );
  }
}