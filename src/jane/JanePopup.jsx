import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Align from 'rc-align';
import Animate from 'rc-animate';

import {createChainedFunction} from './util'
const JanePopup = React.createClass({
    propTypes: {
        // specify that only a single child can be passed to a component as children
        children: PropTypes.element.isRequired
    },

    componentDidMount() {

    },
    onClick(event) {
        //todo: ? need preventDefault?
        // event.preventDefault();
        alert(222)
    },

    render() {

        const child = React.Children.only(this.props.children);
        const childProps = child.props || {};
        const newChildProps = {};
        newChildProps.onClick = createChainedFunction(this.onClick, childProps.onClick);

        return (React.cloneElement(child, newChildProps));
    },
});

export default JanePopup;
