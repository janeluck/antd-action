/**
 * Created by janeluck on 7/5/16.
 */

import Animate from 'rc-animate'
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class EditDialog extends React.Component {


    static propTypes = {}

    static defaultProps = {}


    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }

    }

    componentDidMount() {
        this.componentDidUpdate({}, {
            visible: this.state.visible,
        });
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

    getStyle() {
        return {
            position: 'absolute',
            top: 131,
            right: 0,
            width: 500,
            border: '1px solid #1eb7bc',
            height: 600
        }
    }

    getDialogContainer() {
        if (!this.DialogContainer) {
            this.DialogContainer = document.createElement('div');
            document.body.appendChild(this.DialogContainer);
        }
        return this.DialogContainer;
    }

    getDialog() {
        return (<Animate transitionName="move-right" transitionAppear>
            {this.state.visible ? (<div
                style={this.getStyle()}>
                {this.props.children}
            </div>) : null}
        </Animate>)
    }

    render() {
        this.dialogRendered = this.dialogRendered || this.state.visible;
        return null;

    }
}

