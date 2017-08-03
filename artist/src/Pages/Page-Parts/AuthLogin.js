import React, { Component } from 'react';
import authService from '../../libs/auth.js';
import Error from '../../utility/Error.js'

/* cookies progress */
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class AuthLogin extends Component {
	constructor(props) {
		super(props);
  }

  login = (event)=>{
    var userName= document.getElementById("login_userName").value;
    var password = document.getElementById("login_password").value;
    authService.userCheck(userName, password, (info) => {
      cookies.set('user', info, { path: '/' });
      cookies.set('email', userName, { path: '/' });
      cookies.set('password', password, { path: '/' });
      window.location = "http://localhost:3000/dashboard";
    }, () => {
      this.props.component.setState({
        errors : <Error errorList={[112]} />
      });
    }, () => {
      this.props.component.setState({
        errors : <Error errorList={[113]} />
      });
    });    
  }
/* this is the main script render for Auth componenet */
  render() {
    return (
        <div className="row">
          <div className="col s12">
            <div className="row"> 
              <div className="input-field col s6">
                <input id="login_password" type="password" className="validate"/>
                <label for="login_password">رمز عبور</label>
              </div>
              <div className="input-field col s6">
                <input  id="login_userName" type="text" className="validate"/>
                <label for="login_userName">نام کاربری</label>
              </div> 
            </div>
            <div className="row">
              <button onClick={this.login} className="btn waves-effect waves-light" type="button" >ورود
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default AuthLogin;