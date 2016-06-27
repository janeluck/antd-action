import React from 'react';
import {Timeline, Input, Select, InputNumber, Popover } from 'antd';
import './App.less';
import reqwest from 'reqwest'
import JanePopup from '../jane/JanePopup'

import  { Component } from 'react';
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            hasPop: true
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
    togglePop = () => {
        this.setState({
            hasPop: !this.state.hasPop
        })
    }
    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const input = (<input type="text" value={this.state.value}  onChange = {this.handleInputChange}/>)
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


                <button onClick={this.togglePop}>toggle popup</button>

                {this.state.hasPop ? ( <JanePopup content={[<div>popTitle</div>, input, <div>popContent</div>]}>
                    <button name="popTrigger">click me</button>
                </JanePopup>) : null}




                <Popover content={(<div><input type="text"/></div>)} trigger="click">
                    <button >1111</button>

                </Popover>


                <div>
                    <p>ooooooo</p>
                </div>

                <div    children={[(<div>your name</div>), (<div>my name</div>)]}></div>
            </div>)

    }
};

