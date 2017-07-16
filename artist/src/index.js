import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Auth from './Auth.js';
import Dashboard from './Dashboard.js';
import Messages from './Messages.js';
import Artists from './Artists.js';
import Events from './Events.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path = "/" component = {Auth}/>
		<Route path="/dashboard" component={Dashboard}/>
		<Route path="/messages" component={Messages}/>
		<Route path="/artists" component={Artists}/>
		<Route path="/events" component={Events}/>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
