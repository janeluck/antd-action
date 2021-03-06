/**
 * Created by janeluck on 7/5/16.
 */

import Animate from 'rc-animate'
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'antd';

import './index.less'
export default class EditDialog extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        /*  this.componentDidUpdate({}, {
         visible: this.state.visible,
         });*/
    }
    componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({
                visible: !!nextProps.visible,
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const props = this.props;
        const state = this.state;
        if (this.dialogRendered) {
            const self = this;
            self.dialogInstance = ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getDialog(), this.getDialogContainer())
        }
    }

    componentWillUnmount() {

        const dialogContainer = this.dialogContainer;
        if (dialogContainer) {
            // Remove a mounted React component from the DOM and clean up its event handlers and state.
            ReactDOM.unmountComponentAtNode(dialogContainer);
            dialogContainer.parentNode.removeChild(dialogContainer);
            this.dialogContainer = null;
        }

    }

    getStyle() {
        return {
            position: 'absolute',
            top: 131,
            right: 0,
            //width: 500,
            border: '1px solid #1eb7bc',
            //height: 600
        }
    }

    getDialogContainer() {
        if (!this.dialogContainer) {
            this.dialogContainer = document.createElement('div');
            document.body.appendChild(this.dialogContainer);
        }
        return this.dialogContainer;
    }

    getDialog() {
        const props = this.props
        return (<Animate transitionName="move-right" transitionAppear>
            {this.state.visible ? (<div
                className="ck-editDialog"
                style={this.getStyle()}>

                <div className="BoxPopwrap">
                    <div className="BoxPopwrap_title clearfix">
                        <h5>{props.title}</h5>
                        <a href="javascript:;" onClick={this.onClose.bind(this)} style={{float: 'right'}}><Icon type="cross" style={{color: '#fff', fontSize:16}}></Icon></a>


                    </div>
                    <div className="BoxPopwrap_Cont01 BoxWith">
                        <div className="BoxPopwrap_cnt_ListBoxH845">
                            {props.children}
                        </div>

                        <div className="BoxPopwrap_Cont01_Allbtn clearfix">
                            <div className="ck-editDialog-footer">
                                <Button onClick={this.onClose.bind(this)} type="secondary" size="large">取消
                                </Button>
                                <Button onClick={this.onSure.bind(this)} type="primary" size="large">确定
                                </Button>
                            </div>




                        </div>
                    </div>
                </div>


            </div>) : null}
        </Animate>)
    }
    onOpen() {

    }
    onSure() {
        if (this.props.onSure) {
            this.props.onSure()
        }
        this.setState({
            visible: false
        }, ()=>{
            this.onClose()
        })
    }

    onClose() {
        this.setState({
            visible: false
        }, ()=>{
            this.props.onClose && this.props.onClose()
        })
    }

    render() {
        this.dialogRendered = this.dialogRendered || this.state.visible;
        return null;

    }
}


EditDialog.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
};

EditDialog.defaultProps = {
    visible: false,
    title: '标题'
};