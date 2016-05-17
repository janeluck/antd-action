import React from 'react';
import {Timeline, Input } from 'antd';
import './App.less';
import reqwest from 'reqwest'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            historyItems: []
        }
    }
    componentDidMount() {
        const _this = this
        reqwest({
            url: 'api/western',
            type: 'json',
            method: 'get',


            success: function (response) {

                if (response.success) {
                    _this.setState({
                        historyItems: response.data.history
                    })
                }
            }

        })
    }

    render() {
        return (
            <div>
                <Timeline>

                    {this.state.historyItems.map((item, i) => {

                        return (<Timeline.Item color="green" key={i}>{item.title + '  ' + item.description + '   ' + item.date}</Timeline.Item>)
                    })}

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
                </Timeline>
                <Input type="text" autoComplete="off"/>
            </div>)

    }
};

