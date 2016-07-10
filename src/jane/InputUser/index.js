import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Input, Icon} from 'antd';


const InputUser = React.createClass({

    getInitialState(){
        return {

        };
    },

    render() {
        const {width, ...others} = this.props
        return (
            <div style={{width: width||200}}  {...this.others} >
                <Input  addonAfter={<div>
                    <Icon type="user" style={{fontSize: 14}}></Icon>
                    <Icon type="plus" style={{fontSize: 8}} ></Icon>
                </div>
}/>

            </div>
        )
    },
});

export default InputUser;
