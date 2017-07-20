import React, { Component } from 'react';
import authService from './server/auth.js';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
      logged : false,
      errors : '',
		};
  }
  
  login = (event)=>{
    var userName= document.getElementById("login_userName").value;
    var password = document.getElementById("login_password").value;
    authService.userCheck(userName, password, function(result){
      alert(result? 'success' : 'failed');
    });    
  }
  register =(event)=>{
    var firstname = document.getElementById("reg_firstname").value;
    var lastname = document.getElementById("reg_lastname").value;
    var email = document.getElementById("reg_email").value;
    var password = document.getElementById("reg_password").value;
    var rep_password = document.getElementById("reg_rep_password").value;
    var nickname = document.getElementById("reg_artname").value;
    var fathername = document.getElementById("reg_fathername").value;
    if(password != rep_password){
      this.setState({
        errors : 
        <div className="row">
          <div className="col s12 m6 offset-m3 top-buffer">
          <div className="card-panel  red darken-1 white-text title-size">
            رمز عبور ها یکسان نمی باشد.
          </div>
          </div>
        </div>
      });
    }else{
      var info = {
        first_name:firstname,
        last_name:lastname,
        password:password,
        email:email,
        father_name:fathername,
        nickname:nickname
      };
      authService.userRegister(info, 
      (errors) => {
        this.setState({
        errors : 
        <div className="row">
          <div className="col s12 m6 offset-m3 top-buffer">
          <div className="card-panel  red darken-1 white-text title-size">
            errors
          </div>
          </div>
        </div>
      });
      },
      (info) => {
        this.setState({
        errors : 
        <div className="row">
          <div className="col s12 m6 offset-m3 top-buffer">
          <div className="card-panel  red darken-1 white-text title-size">
            ثبت نام با موفقیت انجام شد
          </div>
          </div>
        </div>
      });
      }
      );
      this.setState({
        errors : ''
      });
    }
  }
/* this is the main script render for Auth componenet */
  render() {
    return (
      <div className="top-buffer row">
        <div className="row">
          <div className="col s12 m4 offset-m4">
            <img src="http://94.23.171.142/absenat/site/public/img/logo-big.png" 
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
                <li className="tab col s3"><a className="active" href="#login" className="black-text title-size">ورود</a></li>
                <li className="tab col s3"><a href="#register" className="black-text title-size">ثبت نام</a></li>
              </ul>
            </div>
         { /* start login */}
            <div id="login" className="col s12 top-buffer">
              <div className="row">
              <div className="col s12">
                <div className="row"> 
                  <div className="input-field col s6">
                    <input id="login_password" type="text" className="validate"/>
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
            </div>
			{/*finish login */}


            <div id="register" className="col s12 ">
              <div className="row">
              <div className="col s12">

                <div className="row"> 
                  <div className="input-field col s6">
                    <input id="reg_lastname" type="text" className="validate"/>
                    <label for="reg_lastname">نام خانوادگی</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="reg_firstname" type="text" className="validate"/>
                    <label for="reg_firstname">نام</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s12">
                    <input  id="reg_email" type="text" className="validate"/>
                    <label for="reg_email">ایمیل (نام کاربری) *</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s6">
                    <input id="reg_rep_password" type="password" className="validate"/>
                    <label for="reg_rep_password">تکرار رمز عبور *</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="reg_password" type="password" className="validate"/>
                    <label for="reg_password">رمز عبور *</label>
                  </div> 
                </div>

                <div className="row"> 
                  <div className="input-field col s6">
                    <input id="reg_artname" type="text" className="validate"/>
                    <label for="reg_artname">نام هنری *</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="reg_fathername" type="text" className="validate"/>
                    <label for="reg_fathername">نام پدر*</label>
                  </div> 
                </div>

                <div className="row">
                   <button onClick={this.register} className="btn waves-effect waves-light" type="button" >ثبت نام
                  </button>
                </div>

                

              </div>

            </div>
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
