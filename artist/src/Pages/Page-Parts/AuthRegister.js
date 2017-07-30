import React, { Component } from 'react';
import authService from '../../libs/auth.js';
import statics from '../../libs/statics.js';
import Error from '../../utility/Error.js'
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

/* cookies progress */
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class AuthRegister extends Component {
	constructor(props) {
    super(props);
    this.state = {
      profile_pic : {
        uploaded : false
      },
      id_card_pic : {
        uploaded : false
      }
    }
  }
  on_id_card_upload = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        id_card_pic : {
          uploaded : true,
          file: file,
          imagePreviewUrl: reader.result
        }
      });
    }
    reader.readAsDataURL(file)
  }
  on_profile_pic_upload = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        profile_pic : {
          uploaded : true,
          file: file,
          imagePreviewUrl: reader.result
        }
      });
    }
    reader.readAsDataURL(file)
  }
  get_tags_array = (id) => {
    var div = document.getElementById(id);
    var chipsArray = div.getElementsByClassName('chip')
    var result = []
    for(var i=0; i<chipsArray.length; i++){
      result.push(chipsArray[i].innerHTML.split('<i')[0]);
    }
    return result;
  }
  register =(event)=>{
    var firstname = document.getElementById("reg_firstname").value;
    var lastname = document.getElementById("reg_lastname").value;
    var email = document.getElementById("reg_email").value;
    var password = document.getElementById("reg_password").value;
    var rep_password = document.getElementById("reg_rep_password").value;
    var nickname = document.getElementById("reg_artname").value;
    var fathername = document.getElementById("reg_fathername").value;
    var artFields = statics.get_art_fields_list_by_title(this.get_tags_array('art-fields'));
    
    var religion = statics.get_religion_by_title(document.getElementById('religion').value);

    var habitate_place = document.getElementById('habitate_place').value;
    var phone = document.getElementById('phone').value;
    var cellphone = document.getElementById('cellphone').value;
    var address = document.getElementById('address').value;

    var educations = statics.get_educations_list_by_title(this.get_tags_array('educations'));

    var birth_day = document.getElementById('birth_day').value;
    var birth_month = document.getElementById('birth_month').value;
    var birth_year = document.getElementById('birth_year').value;
    var birth_place = document.getElementById('birth_place').value;

    console.log(artFields);
    return;
    /* error handling in front end.
       becuase it's better to handle all errors
       in front end before sending any request
    */
    var frontErrorList = [];

    if(firstname === '')
      frontErrorList.push(101);
    if(lastname === '')
      frontErrorList.push(102);
    if(password === '')
      frontErrorList.push(103);
    if(email === '')
      frontErrorList.push(104);
    if(password !== rep_password)
      frontErrorList.push(106);
    if(fathername === '')
      frontErrorList.push(107);
    if(nickname === '')
      frontErrorList.push(108);

    if(frontErrorList.length > 0){
      this.props.component.setState({
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
        this.props.component.setState({
          errors : <Error errorList={errors} />
        });
      },
      (info) => {
        this.props.component.setState({
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
    this.props.component.setState({
      errors : ''
    });
  }
/* this is the main script render for Auth componenet */
  render() {
    return (
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
              <div id="art-fields" className="chips chips-autocomplete art-fields-autocomplete"></div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" id="religion" className="autocomplete religion-autocomplete"/>
                <label for="autocomplete-input">* مذهب</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col m6 s12 right">
                <input id="habitate_years" type="number" className="validate"/>
                <label for="habitate_years">* سال های سکونت</label>
              </div>
              <div className="input-field col m6 s12 right">
                <input type="text" id="habitate_place" className="autocomplete habitate-autocomplete"/>
                <label for="habitate_place">* محل سکونت</label>
              </div>
            </div>
            <div className="row"> 
              <div className="input-field col m6 s12 right">
                <input  id="phone" type="text" className="validate"/>
                <label for="phone">* شماره تماس ثابت</label>
              </div>
              <div className="input-field col m6 s12 right">
                <input id="cellphone" type="text" className="validate"/>
                <label for="cellphone">* شماره همراه</label>
              </div>
            </div>
            <div className="row"> 
              <div className="input-field col m12 s12 right">
                <input id="address" type="text" className="validate"/>
                <label for="address">* آدرس</label>
              </div>
            </div>
            <div className="row">
              <div id="educations" className="chips chips-autocomplete educations-autocomplete"></div>
            </div>
            <div className="row"> 
              <div className="input-field col m3 s6 right">
                <input  id="birth_day" type="number" min="1" max="30" className="validate"/>
                <label for="birth_day">* روز تولد</label>
              </div>
              <div className="input-field col m3 s6 right">
                <input id="birth_month" type="number" min="1" max="12" className="validate"/>
                <label for="birth_month">* ماه تولد</label>
              </div>
              <div className="input-field col m3 s6 right">
                <input id="birth_year" type="number" min="1300" max="1400" className="validate"/>
                <label for="birth_year">* سال تولد</label>
              </div>
              <div className="input-field col m3 s6 right">
                <input id="birth_place" type="text" className="validate"/>
                <label for="birth_place">* محل تولد</label>
              </div>
            </div>
            <div className="file-field input-field row">
              <div className="btn">
                <span>عکس پرسنلی</span>
                <input id="profile_pic" onChange={this.on_profile_pic_upload} type="file"/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
              </div>
            </div>
            <div className="file-field input-field row">
              <div className="btn">
                <span>اسکن کارت ملی</span>
                <input id="id_card_pic" onChange={this.on_id_card_upload} type="file"/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
              </div>
            </div>
            <div className="row">
              <div className="col m6 s12">
                <img className="responsive-img" src={this.state.profile_pic.uploaded? 
                                                      this.state.profile_pic.imagePreviewUrl
                                                    : 'img/profile.png'}/>
              </div>
              <div className="col m6 s12">
                <img className="responsive-img" src={this.state.id_card_pic.uploaded? 
                                                      this.state.id_card_pic.imagePreviewUrl
                                                    : 'img/id-card.png'}/>
              </div>
            </div>
            <div className="row">
              <button onClick={this.register} className="btn waves-effect waves-light" type="button" >ثبت نام
              </button>
            </div>
          </div>

        </div>
    );
  }
}

export default AuthRegister;