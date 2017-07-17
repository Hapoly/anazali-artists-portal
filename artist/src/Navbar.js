import React, { Component } from 'react';

class Navbar extends Component {

  adminItems = () => {
    return (
      <div>
      <ul className="right hide-on-med-and-down">
        <li><a href="reports">گزارشات</a></li>
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
        <li><a href="reports">گزارشات</a></li>
        <li><a href="artists">هنرمندان</a></li>
        <li><a href="events">رویداد ها</a></li>
        <li><a href="messages">پیام ها</a></li>
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
            <a href="#" className="brand-logo center">Logo</a>
            {this.adminItems()}
          </div>
        </nav>

      </div>  
    	);
		}
	}
export default Navbar;