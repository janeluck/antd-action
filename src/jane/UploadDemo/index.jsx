/**
 * Created by Administrator on 2016/7/30.
 */
import React from 'react';
import reqwest from 'reqwest'
import when from 'when'
import {Row, Col, Input, Upload, Button, Icon, Modal, Spin, message} from 'antd';



function  uploadFile(file){
    let formData = new FormData()
    formData.append('filedata', file)
    return reqwest({
        url: '/api/upload',
        data: formData,
        cache: false,
        contentType: 'text/html;charset=utf-8',
        processData: false,
        method: 'post',
        success: function(data){
            //console.log(data);
        }
    })
}
const handleUpload = function () {
    let uploadRequests = []
    const postFiles = Array.prototype.slice.call(document.getElementById('upload').files)
    postFiles.forEach((file)=>{
        uploadRequests.push(uploadFile(file))
    })

    when.all(uploadRequests).done((rs)=>{
        console.log(rs)
    })
}

const UploadDemo = React.createClass({
    componentDidMount() {

    },
    onFileDrop(e){
        if (e.type === 'dragover') {

            e.preventDefault();
            return;
        }
        this.uploadFiles(e.dataTransfer.files)
        e.preventDefault()
    },
    onChange(e){
        this.uploadFiles(e.target.files)
    },
    uploadFiles(files){
        let uploadRequests = []
        const postFiles = Array.prototype.slice.call(files)
        postFiles.forEach((file)=>{
            uploadRequests.push(uploadFile(file))
        })

        when.all(uploadRequests).done((rs)=>{
            console.log(rs)
        })
    },


    render() {
        const uploadProps = {
            action: '/api/upload',
            multiple: true,

            onProgress(e, file){
              console.log(file)
            },
            onSuccess(ret, file){
                console.log(ret)
                console.log(file)
            },
            onChange(files, fileList){
                //console.log(files)
                /*
                if (info.file.status === 'done') {

                    message.success(`${info.file.name} 上传成功。`)

                 if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 上传成功。`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 上传失败。`);
                }*/
            }
        }
        return (
            <div >
                <div style={{height: 300, border:'1px solid cyan'}} onDrop={this.onFileDrop}  onDragOver={this.onFileDrop}>
                    <input type="file" id="upload" multiple onChange={this.onChange}/>上传
                </div>

                <Button onClick={handleUpload}>提交</Button>
                <Row>
                    <Col span={4}>附件</Col>
                    <Col span={20}>
                        <Upload {...uploadProps}>
                            <Button type="ghost">
                                <Icon type="upload"/> 点击上传
                            </Button>
                        </Upload>
                    </Col>
                </Row>
            </div>)
    }
})

/*
 var a = document.createElement('input')
a.id = 'uploadFile'
a.type = 'file'
document.body.appendChild(a)


 var formData = new FormData();

 formData.append('filedata', document.getElementById('uploadFile').files[0]);
 $.ajax({
 url: SCRM.url('/scrmweb/file/uploadFile'),
 data: formData,
 cache: false,
 contentType: false,
 processData: false,
 type: 'POST',
 success: function(data){
 console.log(data);
 }

 })
 */

export default  UploadDemo