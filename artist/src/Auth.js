import React, { Component } from 'react';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logged : false,
		};
	}

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
        <div className="row">
          <div className="col s12 m6 offset-m3">
          <div className="card-panel white">
            <div className="row">
            <div className="col s12">
              <ul className="tabs tabs-fixed-width">
                <li className="tab col s3"><a className="active" href="#login" className="black-text">ورود</a></li>
                <li className="tab col s3"><a href="#register" className="black-text">ثبت نام</a></li>
              </ul>
            </div>
         { /* start login */}
            <div id="login" className="col s12 top-buffer">
              <div className="row">
              <div className="col s12">
                <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">رمز عبور</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">نام کاربری</label>
                  </div> 
                 </div>
                   <div className="row">
                <a className="teal lighten-1 btn">ورود</a>
                </div>
                </div>
               </div>
            </div>
			{/*finish login */}


            <div id="register" className="col s12 top-buffer">
              <div className="row">
              <div className="col s12">

                <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">نام خانوادگی</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">نام</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s12">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">ایمیل (نام کاربری) *</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">تکرار رمز عبور *</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">رمز عبور *</label>
                  </div> 
                </div>

                <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">نام هنری *</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">نام پدر*</label>
                  </div> 
                </div>

                <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">جنسیت *</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">دین و مذهب</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">سال شروع اقامت در منطقه آزاد انزلی</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">وضعیت اقامت در منطقه آزاد انزلی</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">وضعیت تاهل</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">مدرک تحصیلی *</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">کد ملی *</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">شماره شناسنامه *</label>
                  </div>
                </div>

                 <div className="row"> 
                   <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">محل تولد *</label>
                  </div> 
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">تاریخ تولد *</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">رشته ی اصلی هنری *</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">سایر رشته های هنری</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">شماره تلفن ثابت</label>
                  </div>
                  <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">شماره همراه *</label>
                  </div> 
                </div>

                 <div className="row"> 
                  <div className="input-field col s12">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">محل سکونت (آدرس)*</label>
                  </div>
                </div>

                <div className="row">
                  <div className="file-field input-field col s6">
                    <div className="btn">
                      <span>فایل</span>
                      <input type="file" multiple/>
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" placeholder="عکس را بار گذاری کنید"/>
                    </div>
                  </div>
                  <div className="file-field input-field col s6">
                    <div className="btn">
                      <span>فایل</span>
                      <input type="file" multiple/>
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" placeholder="عکس کارت ملی *"/>
                    </div>
                  </div>
                </div>

                <div className="row">
                <a className="teal lighten-1 btn">ثبت نام</a>
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
