import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';
import Auth from './Auth.js';
import Dashboard from './Dashboard.js';
import Messages from './Messages.js';
import Artists from './Artists.js';
import Events from './Events.js';
import Artistdetail from './Artistdetail.js';
import Reports from './Reports.js';

import registerServiceWorker from './registerServiceWorker';
/* cookies progress */
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const not_logged = () => {
	if(cookies.get('email') !== undefined)
		window.location = './dashboard';
}
ReactDOM.render(
		<Router history = {browserHistory}>
			<Route path = "/" component = {Auth} onEnter={not_logged}/>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="/messages" component={Messages}/>
			<Route path="/artists" component={Artists}/>
			<Route path="/events" component={Events}/>
			<Route path="/artistdetail" component={Artistdetail}/>
			<Route path="/reports" component={Reports}/>
		</Router>
	, document.getElementById('root'));
registerServiceWorker();
