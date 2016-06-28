import React from 'react';
import {Timeline, Input, Select, InputNumber, Popover } from 'antd';
import './App.less';
import reqwest from 'reqwest'
import JanePopup from '../jane/JanePopup'

import  { Component } from 'react';
const Option = Select.Option;


const style = {
    padding: '.3em .8em',
    border: '1px solid rgba(0, 0, 0, .1)',
    background: '#58a linear - gradient(hsla(0, 0 %, 100 %, .2),transparent)',
    borderRadius: '.2em',
    boxShadow: '0 .05em .25em rgba(0,0,0,.5)',
    color: 'white',
    textShadow: '0 -.05em .05em rgba(0,0,0,.5)',
    fontSize: '125%',
    lineHeight: '1.5',
}

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

                {this.state.hasPop ? (<JanePopup
                    content={[<div>popTitle</div>, <input type="text" value={this.state.value}  onChange = {this.handleInputChange}/>, <div>popContent</div>]}>
                    <button name="popTrigger">click me</button>
                </JanePopup>) : null}


                <Popover content={(<div><input type="text"/></div>)} trigger="click">
                    <button >1111</button>

                </Popover>


                <div>
                    <p>ooooooo</p>
                </div>

                <div children={[(<div>your name</div>), (<div>my name</div>)]}></div>

                <div style={style}>
                    my custom div
                </div>
            </div>)

    }
};

