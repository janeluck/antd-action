/**
 * Created by jane on 11/03/2017.
 */
import React from 'react';

export default class Example extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        };
    }

    componentDidMount() {
        //console.trace()
        this.setState({val: this.state.val + 1});
       // console.trace()
        console.log(this.state.val);    // 第 1 次 log
        //console.trace()
        this.setState({val: this.state.val + 1});
        //console.trace()
        console.log(this.state.val);    // 第 2 次 log

        setTimeout(() => {
        //    console.trace()
            this.setState({val: this.state.val + 1});
          //  console.trace()
            console.log(this.state.val);  // 第 3 次 log
          //  console.trace()
            this.setState({val: this.state.val + 1});
            //console.trace()
            console.log(this.state.val);  // 第 4 次 log
        }, 0);
    }

    render() {
        return null;
    }
};