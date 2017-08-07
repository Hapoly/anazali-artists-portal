import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter ,Switch } from 'react-router-dom'
import Auth 					from './Pages/Auth.js';
import Dashboard 				from './Pages/Dashboard.js';
import Messages 				from './Pages/Messages.js';
import Artists 					from './Pages/Artists.js';
import Events 					from './Pages/Events.js';
import Artistdetail 			from './Pages/Artistdetail.js';
import Reports 					from './Pages/Reports.js';
import NoMatch 					from './Pages/NoMatch';

import registerServiceWorker from './registerServiceWorker';
/* cookies progress */
import Cookies from 'universal-cookie';
const cookies = new Cookies();

/* policy states */
const logged_in = () => {
	return(typeof cookies.get('email') !== 'undefined');
}
const is_admin = () => {
	return cookies.get('user').type === 'ADMIN';
}
ReactDOM.render(
		<Router>
				{logged_in()?
				<Switch>
					<Route path="/dashboard" 
						component={is_admin()?Dashboard:Dashboard} exact/>
					<Route path="/messages" 
						component={is_admin()?Messages:Messages} exact/>
					<Route path="/artists" 
						component={is_admin()?Artists:Artists} exact/>
					<Route path="/events" 
						component={is_admin()?Events:Events} exact/>
					<Route path="/artistdetail" 
						component={is_admin()?Artistdetail:Artistdetail} exact/>
					<Route path="/reports" 
						component={is_admin()?Reports:Dashboard} exact/>

					<Redirect from="/login" to="/dashboard"/>
					<Redirect from="/" to="/dashboard"/>

					<Route component={NoMatch} exact/>
				</Switch>
				:
				<Switch>
					<Route path="/login" component={Auth}/>
					<Redirect to="/login" />
				</Switch>
				}
		</Router>
	, document.getElementById('root'));
registerServiceWorker();
