import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (

    	<div className="navbar-fixed">
        <nav className="nav-color">
          <div className="nav-wrapper nav-color">
           <a href="#" className="brand-logo center">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="artists">هنرمندان</a></li>
              <li><a href="events">رویداد ها</a></li>
              <li><a href="messages">پیام ها</a></li>
            </ul>
          </div>
        </nav>
      </div>  
    	);
		}
	}
export default Navbar;