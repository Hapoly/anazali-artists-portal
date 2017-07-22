import React, { Component } from 'react';
import authService from './server/auth.js';
import Error from './utility/Error.js'

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

  login = (event)=>{
    var userName= document.getElementById("login_userName").value;
    var password = document.getElementById("login_password").value;
    authService.userCheck(userName, password, (result) => {
      if (result.result =='success'){
          cookies.set('user', result.user, { path: '/' });
          cookies.set('email', email, { path: '/' });
          cookies.set('password', password, { path: '/' });
          window.location = "http://localhost:3000/dashboard";
      }else{
        console.log(result);
         this.setState({
          errors : <Error errorList={[112]} />
        });
           
      }
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

    /* error handling in front end.
       becuase it's better to handle all errors
       in front end before sending any request
    */
    var frontErrorList = [];

    if(firstname == '')
      frontErrorList.push(101);
    if(lastname == '')
      frontErrorList.push(102);
    if(password == '')
      frontErrorList.push(103);
    if(email == '')
      frontErrorList.push(104);
    if(password != rep_password)
      frontErrorList.push(106);
    if(fathername == '')
      frontErrorList.push(107);
    if(nickname == '')
      frontErrorList.push(108);

    if(frontErrorList.length > 0){
      this.setState({
          errors : <Error errorList={frontErrorList} />
        });
      return;
    }
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
          errors : <Error errorList={errors} />
        });
      },
      (info) => {
        this.setState({
          errors : 
            <div className="row">
              <div className="col s12 m6 offset-m3 top-buffer">
              <div className="card-panel green darken-3 white-text">
                <p>ثبت نام با موفیقت انجام شد</p>
                <p>هنرمند محترم. درخواست شما برای ثبت نام در سامانه هنرمندان منطقه آزاد انزلی با موفقیت ارسال شد. کارشناسان مربوطه در اسرع وقت با بررسی اطلاعات ارسال شده توسط شما، با درخواست شما موافقت کرده و شما را از طریق ایمیل آگاه خواهند ساخت</p>
                <p>با تشکر</p>
              </div>
              </div>
            </div>
        });
    });
    this.setState({
      errors : ''
    });
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
            {/* login tab */}
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
            {/* register tab */}
            <div id="register" className="col s12 ">
              <div className="row">
                <div className="col s12">

                  <div className="row"> 
                    <div className="input-field col m6 s12 right">
                      <input  id="reg_firstname" type="text" className="validate"/>
                      <label for="reg_firstname">* نام</label>
                    </div>
                    <div className="input-field col m6 s12 right">
                      <input id="reg_lastname" type="text" className="validate"/>
                      <label for="reg_lastname">* نام خانوادگی</label>
                    </div>
                  </div>

                  <div className="row"> 
                    <div className="input-field col s12 m12">
                      <input  id="reg_email" type="email" className="validate"/>
                      <label for="reg_email">* آدرس ایمیل</label>
                    </div> 
                  </div>

                  <div className="row"> 
                    <div className="input-field col m6 s12 right">
                      <input  id="reg_password" type="password" className="validate"/>
                      <label for="reg_password">* کلمه عبور</label>
                    </div> 
                    <div className="input-field col m6 s12 right">
                      <input id="reg_rep_password" type="password" className="validate"/>
                      <label for="reg_rep_password">* تکرار کلمه عبور</label>
                    </div>
                  </div>

                  <div className="row"> 
                    <div className="input-field col m6 s12 right">
                      <input  id="reg_fathername" type="text" className="validate"/>
                      <label for="reg_fathername">* نام پدر</label>
                    </div>
                    <div className="input-field col m6 s12 right">
                      <input id="reg_artname" type="text" className="validate"/>
                      <label for="reg_artname">* نام هنری</label>
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
