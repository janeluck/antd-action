/**
 * Created by janeluck on 7/5/16.
 */

import Animate from 'rc-animate'
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'antd';
import reqwest from 'reqwest';
import {Promise} from 'es6-promise';

export default class CKUpload extends React.Component {

    constructor(props) {

        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {



    }

    getStyle() {
        return {

        }
    }
    uploadFile = (file) =>{
        let formData = new FormData()
        formData.append('filedata', file)
        return reqwest({
            url: '/api/upload',
            data: formData,
            cache: false,
            contentType: 'text/html;charset=utf-8',
            processData: false,
            method: 'post'
        })
    }
    uploadFiles = (files) => {
        let uploadRequests = []
        const postFiles = Array.prototype.slice.call(files)
        postFiles.forEach((file)=> {
            uploadRequests.push(this.uploadFile(file))
        })

        Promise.all(uploadRequests).then(rsArray=> {

            console.log(rsArray)
        }, reason=> {
            console.log(reason)
        })
    }

    render() {

        return (
            <span>
                <input type="file" multiple/>
            </span>
        )
    }
}


CKUpload.propTypes = {
    multiple: PropTypes.bool,
};

CKUpload.defaultProps = {
    multiple: true
};