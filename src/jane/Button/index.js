import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';


const JaneButton = React.createClass({

    getInitialState(){
        return {
            loading: false,
            iconLoading: false,
        };
    },
    enterLoading() {
        alert(2)
        this.setState({loading: true});
    },
    enterIconLoading() {
        this.setState({iconLoading: true});
    },
    handleClick(){
        this.setState({
            loading: true
        }, ()=> {
            setTimeout(()=> {

                this.setState({
                    loading: false
                })
            }, 2000)
        })
    },
    render() {

        return (
            <div>
                <Button shape="circle">ok</Button>
                <Button shape="circle-outline">+</Button>
                <Button type="primary">sure</Button>
                <Button type="ghost">cancel</Button>
                <Button icon="edit" type="dashed">edit</Button>
                <Button type="primary" disabled>sure</Button>
                <Button type="ghost" disabled>cancel</Button>
                <Button icon="pen" type="dashed" disabled>edit</Button>

                {this.state.loading ? <Button disabled type="primary">stateBtn</Button> :
                    <Button type="primary" onClick={this.handleClick}>stateBtn</Button>}



                <Button type="primary" loading>
                    Loading
                </Button>
                <Button type="primary" size="small" loading>
                    Loading
                </Button>
                <br />
                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                    Click me!
                </Button>
                <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                    Click me!
                </Button>
            </div>
        )
    },
});

export default JaneButton;
