import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Align from 'rc-align';
import Animate from 'rc-animate';

import {createChainedFunction} from './util'
import './popup.less'

const style = {
    position: 'absolute',
    border: '1px solid cyan',
    width: 100
}


const JanePopup = React.createClass({
    propTypes: {
        // specify that only a single child can be passed to a component as children
        children: PropTypes.element.isRequired
    },
    componentDidMount() {
        this.componentDidUpdate({}, {
            popupVisible: this.state.popupVisible,
        });
    },

    componentWillReceiveProps(nextProps) {
        if ('popupVisible' in nextProps) {
            this.setState({
                popupVisible: !!nextProps.popupVisible,
            });
        }
    },
    componentDidUpdate(prevProps, prevState) {
        const props = this.props;
        const state = this.state;
        if (this.popupRendered) {
            const self = this;

            self.popupInstance = ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getPopup(), this.getPopupContainer())


        }
    },


    getInitialState() {

        return {
            popupVisible: false
        };
    },

    getPopupContainer() {
        if (!this.popupContainer) {
            this.popupContainer = document.createElement('div');
            document.body.appendChild(this.popupContainer);
        }
        return this.popupContainer;
    },

    getRootDomNode() {
        return ReactDOM.findDOMNode(this);
    },

    getPopup(){
        const {content} = this.props
        const className = this.state.popupVisible ? '' : 'jane-popup-hidden'
        return (<div style={this.getStyle()}
                     className={className}>
            {content}
        </div>)
    },
    getStyle(){

        return Object.assign({}, style, this.getPosition())

    },

    getPosition(){

        const targetDOM = this.getRootDomNode()
        return {
            top: targetDOM.getBoundingClientRect().top + document.documentElement.scrollTop,
            left: targetDOM.getBoundingClientRect().left + document.documentElement.scrollLeft
        }
    },
    onClick(event) {

        this.setState({
            popupVisible: true
        })

    },

    render() {
        this.popupRendered = this.popupRendered || this.state.popupVisible;
        const child = React.Children.only(this.props.children);
        const childProps = child.props || {};
        const newChildProps = {};

        newChildProps.onClick = createChainedFunction(this.onClick, childProps.onClick);

        // React.cloneElement: The resulting element will have the original element's props with the new props merged in shallowly.
        return (React.cloneElement(child, newChildProps));
    },
});

export default JanePopup;
