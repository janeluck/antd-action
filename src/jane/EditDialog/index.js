/**
 * Created by janeluck on 7/5/16.
 */

import Animate from 'rc-animate'
import React from 'react';

export default class EditDialog extends React.Component {


    static propTypes = {}

    static defaultProps = {}


    constructor(props) {
        super(props)


    }


    render() {

        return (
            <div >
                <div style={{position:'relative'}}>
                    <Animate transitionName="move-right">
                        {this.props.visible ? (<div
                            style={{position:'absolute',top:131, right:0,width:500, border:'1px solid #1eb7bc', height:600}}>
                            新建任务</div>) : null}
                    </Animate>
                </div>
            </div>
        )
    }
}

