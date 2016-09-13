/**
 * Created by janeluck on 9/6/16.
 */


import ReactDOM from 'react-dom';
import React from 'react';
import classNames from 'classnames';
import { Menu, Icon, Switch, Row, Col, Button, Input,  Modal,Tag } from 'antd';
import reqwest from 'reqwest'


export default class SelectItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    componentDidUpdate() {

        // 实时调整input的宽度
        const inputNode = this.getInputDOMNode();
        const mirrorNode = this.getInputMirrorDOMNode();
        if (inputNode.value) {
            inputNode.style.width = '';
            inputNode.style.width = `${mirrorNode.clientWidth}px`;
        } else {
            inputNode.style.width = '';
        }

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
                console.log(data.data)
                that.setState({
                    gData: [data.data]
                })
            } else {
            }

        }).fail()
        reqwest({
            // todo
            url: '/api/getUsers',
            type: 'json',
            method: 'post',
            data: {
                queryStr: 'janeluck001'
            }
        }).then(function (data) {
           //alert(data)

        }).fail()



    }

    getInputDOMNode = ()=> {
        return this.inputInstance;
    }
    getInputMirrorDOMNode = ()=> {
        return this.inputMirrorInstance;
    }


    getInputElement = () => {
        const value = this.state.value
        return (<div className="ant-select-search__field__wrap">
            <input
                ref={
                    input => this.inputInstance = input
                }
                value={value}
                onChange={this.onInputChange}
                className="ant-select-search__field"
                type="text"/>
            <span
                ref={
                    inputMirrorInstance => this.inputMirrorInstance = inputMirrorInstance
                }
                className="ant-select-search__field__mirror">
                {value}
            </span>
        </div>);
    }

    onSearch = () =>{

    }
    onTagClose() {

    }

    onInputChange = (event)=> {
        const val = event.target.value;
        this.setState({
            value: val
        });
    }

    render() {


        return (
            <div>
                <div className="ck-SelectItem">
                    <div className="ant-select-selection ant-select-selection--multiple">
                        <ul>
                            <li className="ant-select-selection__choice"><Tag closable
                                                                              onClose={this.onTagClose}>标签三</Tag>
                            </li>
                            <li className="ant-select-selection__choice"><Tag closable
                                                                              onClose={this.onTagClose}>标签三</Tag>
                            </li>
                            <li className="ant-select-selection__choice"><Tag closable
                                                                              onClose={this.onTagClose}>标签三</Tag>
                            </li>
                            <li className="ant-select-search ant-select-search--inline">
                                {this.getInputElement()}

                            </li>
                        </ul>
                    </div>
                </div>

                <input type="text"/>

            </div>
        );
    }
}










