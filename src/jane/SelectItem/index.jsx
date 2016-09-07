/**
 * Created by janeluck on 9/6/16.
 */


import ReactDOM from 'react-dom';
import React from 'react';
import classNames from 'classnames';
import { Menu, Icon, Switch, Row, Col, Buttonn, Input,Button, Tree, Modal } from 'antd';
import reqwest from 'reqwest'



export default class SelectItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            gData: [],
            expandedKeys: [],
        }
    }
    componentWillMount(){
        const that = this
        reqwest({
            // todo
            url: '/setting/scrm/getDeptTree',
            type: 'json',
            method: 'post',
            data: {

            }
        }).then(function (data) {
            if (data.rs) {
                console.log(data.data)
                that.setState({
                    gData: [data.data]
                })
            }else {}

        }).fail()
    }

    render() {


        return (
           <div>

           </div>
        );
    }
}

















