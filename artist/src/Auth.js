import React, { Component } from 'react';
import logo from './logo.svg';

class Auth extends Component {
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
              <li className="tab col s3"><a href="#test1" className="black-text">ثبت نام</a></li>
              <li className="tab col s3"><a className="active" href="#test2" className="black-text">ورود</a></li>
           
            </ul>
            </div>
            <div id="test1" className="col s12">Test 1</div>
            <div id="test2" className="col s12">Test 2</div>
            <div id="test3" className="col s12">Test 3</div>
            <div id="test4" className="col s12">Test 4</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
