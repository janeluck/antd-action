/**
 * Created by janeluck on 7/5/16.
 */

import Animate from 'rc-animate'
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'antd';

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