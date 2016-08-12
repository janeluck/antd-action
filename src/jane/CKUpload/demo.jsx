import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'antd';

import CKUpload from './index.jsx'
import CKUploadList from './list.jsx'


export default class DemoCKUpload extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            filesList: []
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

    onRemove = (file) =>{
        const nextFileslist = this.state.filesList.concat().filter(f=>{
            return f.uid != file.uid
        })
        this.setState({
            filesList: nextFileslist
        })
    }



    onChange = (e) => {

    }
    onSuccess = (rsArray, files) =>{
        let successFiles = this.state.filesList.concat()

        rsArray.forEach((rs, i)=>{
            if (rs.rs) {
                // uid
                console.log(files[i].uid = rs.data.id)
                files[i].url = rs.data.url
                // rsArray of values maintains the order of the original iterable object, not the order that the promises were resolved in
                successFiles.push(files[i])
            }else {
                alert('upload fail')
            }
        })
        this.setState({
            filesList: successFiles
        })


    }

    onError = (reason) =>{
        console.log(reason)
    }

    render() {
        const props = this.props;
        return (

            <div>
                <CKUpload
                    onSuccess = {this.onSuccess}
                    onError = {this.onError}
                >
                    <Button>上传</Button>
                </CKUpload>
                <CKUploadList
                    items = {this.state.filesList}
                    onRemove={this.onRemove}
                />
            </div>



        )
    }
}