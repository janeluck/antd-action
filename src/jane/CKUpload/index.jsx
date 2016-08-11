/**
 * Created by janeluck on 7/5/16.
 */

import Animate from 'rc-animate'
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'antd';
import reqwest from 'reqwest';
import {Promise} from 'es6-promise';

const noop = function () {

}

export default class CKUpload extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            disabled: false,
            filesList: this.props.filesList || []
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


    onChange = (e) => {
        if (this.state.disabled) {
            return;
        }
        this.setState({
            disabled: true,
        });
        const files = e.target.files;
        this.uploadFiles(files);
    }
    onClick = (e) => {
        const el = this.refs.file;
        if (!el) {
            return;
        }
        el.click();
    }
    onKeyDown = (e) => {

        if (e.key === 'Enter') {
            this.onClick();
        }
    }
    onFileDrop = (e) => {

        if (this.state.disabled) {
            return;
        }
        if (e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        this.setState({
            disabled: true
        });
        this.uploadFiles(e.dataTransfer.files)
        e.preventDefault()
    }
    uploadFile = (file) => {
        let formData = new FormData()
        formData.append('filedata', file)
        return reqwest({
            url: this.props.url,
            data: formData,
            cache: false,
            contentType: 'text/html;charset=utf-8',
            processData: false,
            method: 'post'
        })
    }
    uploadFiles = (files) => {
        console.log(files)
        const props = this.props
        let uploadRequests = []
        const postFiles = Array.prototype.slice.call(files)
        postFiles.forEach((file)=> {
            uploadRequests.push(this.uploadFile(file))
        })

        Promise.all(uploadRequests).then(rsArray=> {

            this.setState({
                disabled: false
            })

            if (props.onSuccess) {
                props.onSuccess(rsArray, files)
            }

        }, reason=> {
            console.log(reason)
            this.setState({
                disabled: false
            })
            if (props.onError) {
                props.onError(reason, files)
            }

        })
    }

    render() {
        const props = this.props;
        return (

            <span
                role="button"
                tabIndex="0"
                onKeyDown={this.onKeyDown}
                onClick={this.onClick}>

                   <input
                       type="file"
                       ref="file"
                       disabled={this.state.disabled}
                       style={{ display: 'none' }}
                       accept={props.accept}
                       multiple={props.multiple}
                       onChange={this.onChange}
                   />
                {props.children}
            </span>



        )
    }
}


CKUpload.propTypes = {
    multiple: PropTypes.bool,
    beforeUpload: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    url: PropTypes.string,
};

CKUpload.defaultProps = {
    multiple: true,
    url: '/api/upload'
};