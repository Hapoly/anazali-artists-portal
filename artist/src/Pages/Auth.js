import React, { Component } from 'react';
import authService from '../libs/auth.js';
import Error from '../utility/Error.js'

/* page parts */
import AuthRegister from './Page-Parts/AuthRegister.js';
import AuthLogin from './Page-Parts/AuthLogin.js';

/* cookies progress */
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
      logged : false,
      errors : ''
    };
  }
/* this is the main script render for Auth componenet */
  render() {
    return (
  <div className="top-buffer row">
    <div className="row">
      <div className="col s12 m4 offset-m4">
        <img src="img/logo-big.png" 
          alt="" 
          className="responsive-img"
        />
      </div>
    </div>
    {this.state.errors}
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card-panel white">
          <div className="row">
            <div className="col s12">
              <ul className="tabs tabs-fixed-width">
                <li className="tab col s3"><a className="active black-text title-size" href="#login">ورود</a></li>
                <li className="tab col s3"><a href="#register" className="black-text title-size">ثبت نام</a></li>
              </ul>
            </div>
            {/* login tab */}
            <div id="login" className="col s12 top-buffer">
              <AuthLogin component={this} />
            </div>
            {/* register tab */}
            <div id="register" className="col s12 ">
              <AuthRegister component={this}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default Auth;
