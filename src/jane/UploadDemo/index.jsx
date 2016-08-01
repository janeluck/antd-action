/**
 * Created by Administrator on 2016/7/30.
 */
import React from 'react';
import reqwest from 'reqwest'
import {Row, Col, Input, Upload, Button, Icon, Modal, Spin, message} from 'antd';

export default class UploadDemo extends React.Component {
    componentDidMount() {

    }


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
};