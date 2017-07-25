import React, { Component } from 'react';


/* cookies progress */
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Navbar extends Component {
  getFullName = () => {
    var first_name = cookies.get('user').first_name;
    var last_name = cookies.get('user').last_name;
    return first_name + ' ' + last_name;
  }

  logout = (event) => {
    cookies.remove('user');
    cookies.remove('email');
    cookies.remove('password');
    window.location = "http://localhost:3000";
  }
  adminItems = () => {
    return (
      <div>
      <ul className="right hide-on-med-and-down title-text">
        <li><a href="reports">گزارشات</a></li>
        <li><a href="artists">هنرمندان</a></li>
        <li><a href="events">رویداد ها</a></li>
        <li><a href="messages">پیام ها</a></li>
        <li><a href="profile">{this.getFullName()}</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-left">
      <li>
        <button onClick={this.logout} className="glyphicon glyphicon-log-in btn cyan darken-4">خروج</button>
      </li>
    </ul>
      <ul className="right hide-on-large-only" style={{paddingRight: "0px"}}>
        <li>
          <a className="dropdown-button" href="#!" data-activates="dropdown1">
            <i className="material-icons right">reorder</i>
          </a>
        </li>
      </ul>
      <ul id="dropdown1" className="dropdown-content title-text">
        <li><a href="reports">گزارشات</a></li>
        <li><a href="artists">هنرمندان</a></li>
        <li><a href="events">رویداد ها</a></li>
        <li><a href="messages">پیام ها</a></li>
        <li><a href="profile">{this.getFullName()}</a></li>
      </ul>
      </div>
    );
  }
  regItems = () => {
    return (
      <div>
      <ul className="right hide-on-med-and-down">
        
        <li><a href="artists">هنرمندان</a></li>
        <li><a href="events">رویداد ها</a></li>
        <li><a href="messages">پیام ها</a></li>
      </ul>
      <ul className="right hide-on-large-only" style={{paddingRight: "0px"}}>
        <li>
          <a className="dropdown-button" href="#!" data-activates="dropdown1">
            <i className="material-icons right">reorder</i>
          </a>
        </li>
      </ul>
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="artists">هنرمندان</a></li>
        <li><a href="events">رویداد ها</a></li>
        <li><a href="messages">پیام ها</a></li>
      </ul>
      </div>
    );
  }
  render() {
    return (
    	<div className="navbar-fixed">
        <nav className="nav-color">
          <div className="nav-wrapper nav-color">
            <a href="#" className="brand-logo center">
              <img src="img/logo-big-white.png" alt="" className="responsive-img col"
              style={{width : "5rem"}}/>
            </a>
            {this.adminItems()}
          </div>
        </nav>

      </div>  
    	);
		}
	}
export default Navbar;