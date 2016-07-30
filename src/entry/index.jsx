import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

import { Router, Route, Link, browserHistory } from 'react-router'

import InputUserDemo from '../demo'

const Page = React.createClass({render() {
    return (
        <div>
            <ul>
                <Link to='/app'>App</Link>
                <br/>
                <Link to='/input'>Input</Link>
            </ul>
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

