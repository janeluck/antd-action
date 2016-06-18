import React from 'react';
import {Timeline, Input, Select, InputNumber } from 'antd';
import './App.less';
import reqwest from 'reqwest'


import  { Component } from 'react';
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
export default class App extends React.Component {

    constructor(props) {
        super(props)

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
            <div style={{margin: 30}}>

                <div className="jane-input-number">
                    <div className="jane-input-number-handle-wrap">
                        <a href="javascript:;" className="jane-input-number-handler jane-input-number-handler-up">
                            <span className="jane-input-number-handler-up-inner"></span>
                        </a>
                        <a href="javascript:;" className="jane-input-number-handler jane-input-number-handler-down">
                            <span className="jane-input-number-handler-down-inner"></span>
                        </a>

                    </div>
                    <div className="jane-input-number-input-wrap">
                        <input type="text" className="jane-input-number-input"/>
                    </div>

                </div>
            </div>)

    }
};

