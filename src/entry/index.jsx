import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

import { Router, Route, Link, browserHistory } from 'react-router'

import InputUserDemo from '../demo'


import { Menu, Icon, Switch } from 'antd';
import '../component/App.less';
import '../jane/styles/style/index.less';


import '../jane/Class'
const SubMenu = Menu.SubMenu;

const Sider = React.createClass({

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    },
    render() {
        return (
            <div>
                <br />
                <br />
                <Menu
                      onClick={this.handleClick}
                      style={{ width: 240 }}
                      defaultOpenKeys={['sub1']}
                      mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                        <Menu.Item key="1"><Link to='/app'>App</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/input'>Input</Link></Menu.Item>
                        <Menu.Item key="3">选项3</Menu.Item>
                        <Menu.Item key="4">选项4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                        <Menu.Item key="5">选项5</Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                        <SubMenu key="sub3" title="三级导航">
                            <Menu.Item key="7">选项7</Menu.Item>
                            <Menu.Item key="8">选项8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    },
});






const Page = React.createClass({render() {
    return (
        <div>
            <Sider />
            <div>
                {this.props.children}
            </div>
        </div>
    )
} })
const NoMatch = React.createClass({render() {
    return (<div>no match</div>)
}})


// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Page}>
        <Route path="app" component={App}/>
        <Route path="input" component={InputUserDemo}/>
        <Route path="*" component={NoMatch}/>
    </Route>
</Router>, document.getElementById('react-content'));

