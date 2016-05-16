import React from 'react';
import {Timeline } from 'antd';
import './App.less';

export default class App extends React.Component {
  render() {
    return ( <Timeline>
      <Timeline.Item color="green">创建服务现场 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">创建服务现场 2015-09-01</Timeline.Item>
      <Timeline.Item color="red">
        <p>初步排除网络异常1</p>
        <p>初步排除网络异常2</p>
        <p>初步排除网络异常3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item>
        <p>技术测试异常1</p>
        <p>技术测试异常2</p>
        <p>技术测试异常3 2015-09-01</p>
      </Timeline.Item>
    </Timeline>);
  }  
};

