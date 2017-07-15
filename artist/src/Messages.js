import React, { Component } from 'react';
import logo from './logo.svg';

class Messages extends Component {
  render() {
    return (
    	<div>

    	 <div className="navbar-fixed">
        <nav className="nav-color">
          <div className="nav-wrapper nav-color">
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">پیام ها</a></li>
              <li><a href="badges.html">هنرمندان</a></li>
            </ul>
          </div>
        </nav>
      </div>  


       <div className="top-buffer row">
        <div className="row">
          <div className="col s12 m6 ">
            <div className="card-panel white ">
             <div className="row">
                <div className="col s12">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab col s3"><a className="active" href="#nowevents" className="black-text">رویداد های جاری</a></li>
                    <li className="tab col s3"><a href="#futureevents" className="black-text">رویداد های آینده</a></li>
                    <li className="tab col s3"><a href="#request" className="black-text"> درخواست ها</a></li>
                  </ul>
                </div>

             <div id="nowevents" className="col s12 top-buffer">
              <div className="row">
                <div className="col s12">
                   <table className="bordered">
                    <thead>
                      <tr>
                          <th>عنوان رویداد</th>
                          <th>دسته بندی</th>
                          <th>تاریخ</th>
                          <th>جزییات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>گردهمایی</td>
                        <td>جلسه هنرمندان</td>
                        <td><a href="#"><i className="small material-icons">today</i></a></td>
                        <td><a href="#"><i className="small material-icons">info_outline</i></a></td>
                      </tr>
                    </tbody>
                </table>
                </div>
              </div>
            </div>


             <div id="futureevents" className="col s12 top-buffer">
              <div className="row">
                <div className="col s12">
                <table className="bordered">
                    <thead>
                      <tr>
                          <th>عنوان رویداد</th>
                          <th>دسته بندی</th>
                          <th>تاریخ</th>
                          <th>جزییات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>گردهمایی</td>
                        <td>جلسه هنرمندان</td>
                        <td><a href="#"><i className="small material-icons">today</i></a></td>
                        <td><a href="#"><i className="small material-icons">info_outline</i></a></td>
                      </tr>
                    </tbody>
                </table>
                </div>
              </div>
            </div>


             <div id="request" className="col s12 top-buffer">
              <div className="row">
                <div className="col s12">
                <table className="bordered">
                    <tbody>
                      <tr>
                          <td>درخواست شرکت در رویداد استارتاپ ویکند</td>
                          <td>از طرف رضا</td>
                          <td ><a href="#"><i className="small material-icons">today</i></a></td>
                      </tr>
                    </tbody>
                </table>
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
export default Messages;