/**
 * Created by janeluck on 8/11/16.
 */

import * as React from 'react';
import Animate from 'rc-animate';
import {Icon} from 'antd';


import classNames from 'classnames';

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
const previewFile = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
};

export default class UploadList extends React.Component {
    static defaultProps = {
        listType: 'text',
        items: [],

    };

    handleClose = (file) => {
        this.props.onRemove(file);
    }

    handlePreview = (file, e) => {
        if (this.props.onPreview) {
            e.preventDefault();
            return this.props.onPreview(file);
        }
    }

    componentDidUpdate() {
        if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
            return;
        }
        this.props.items.forEach(file => {
            if (typeof document === 'undefined' ||
                typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) ||
                file.thumbUrl !== undefined) {
                return;
            }
            /*eslint-disable */
            file.thumbUrl = '';
            /*eslint-enable */
            previewFile(file.originFileObj, (previewDataUrl) => {
                /*eslint-disable */
                file.thumbUrl = previewDataUrl;
                /*eslint-enable */
                this.forceUpdate();
            });
        });
    }

    render() {
        let list = this.props.items.map(file => {

            let icon = <Icon type="paper-clip"/>;


            const infoUploadingClass = classNames({
                [`ant-upload-list-item`]: true
            });
            return (
                <div className={infoUploadingClass} key={file.uid}>
                    <div className={`ant-upload-list-item-info`}>
                        {icon}
                        <a
                            href={file.url}
                            target="_blank"
                            className={`ant-upload-list-item-name`}
                            onClick={e => this.handlePreview(file, e)}
                        >
                            {file.name}
                        </a>

                        <Icon type="cross" onClick={() => this.handleClose(file)}/>
                    </div>
                </div>
            );
        });
        const listClassNames = classNames({
            [`ant-upload-list`]: true
        });
        return (
            <div className={listClassNames}>
                <Animate transitionName={`ant-upload-margin-top`}>
                    {list}
                </Animate>
            </div>
        );
    }
}
