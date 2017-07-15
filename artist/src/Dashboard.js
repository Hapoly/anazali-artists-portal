import React, { Component } from 'react';
import logo from './logo.svg';

class Dashboard extends Component {
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

             <div className="card-panel white ">
             <div className="row">
                <div className="col s12">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab col s3"><a className="active" href="#registerreq" className="black-text">درخواست های ثبت نام</a></li>
                  </ul>
                </div>
                <div id="registerreq" className="col s12 top-buffer">
                <div className="row">
                  <div className="col s12">
                     <table className="bordered">
                      <thead>
                        <tr>
                          <th>نام و نام خانوادگی</th>
                          <th>حوزه کاری</th>
                          <th >جزییات</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                           <td>علی اکبری</td>
                          <td>خواننده</td>
                         <td><a href="#"><i className="small material-icons">info_outline</i></a></td>
                          <td>
                          <button class="btn btn-success btn-sm">تایید</button> <button class="btn btn-danger btn-sm">رد</button>
                          </td>
                        </tr>
                      </tbody>
                  </table>
                  </div>
                </div>
            </div>

                </div>
                </div>

          </div>




           <div className="col s12 m6 ">
            <div className="card-panel white">
             <div className="row">
              <div className="col s12">
                <ul className="tabs tabs-fixed-width">
                  <li className="tab col s3"><a className="active" href="#login" className="black-text">ارسال پیام</a></li>
                  <li className="tab col s3"><a href="#register" className="black-text">پیام های جدید</a></li>
                </ul>
              </div>

            <div id="login" className="col s12">
              <div className="row">
              <div className="col s12">
                <div className="row"> 
                  <div className="input-field col s6 right">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">گیرنده</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input  id="first_name" type="text" className="validate"/>
                    <label for="first_name">عنوان پیام</label>
                  </div> 
                 </div>
                
                <div className="row">
                  <div className="input-field col s12 ">
                    <textarea id="textarea1" className="materialize-textarea "></textarea>
                    <label for="textarea1" className="Rt">متن پیام</label>
                  </div>
                </div>

                  <div className="row">
                <a className="teal lighten-1 btn">ارسال</a>
                </div>
                </div>
               </div>
            </div>

             <div id="register" className="col s12 top-buffer">
              <div className="row">
              <div className="col s12">
                
                <table className="bordered">
                  <thead>
                    <tr>
                        <th>فرستنده</th>
                        <th>عنوان</th>
                        <th>حذف</th>
                        <th>مشاهده</th>
                        
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>علی اکبری</td>
                      <td>مشکل مالی در غرفه ۱۸</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                    <tr>
                      <td>ناهید افشار</td>
                      <td>سلام</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                    <tr>
                      <td>مریم وجودی</td>
                      <td>ارسال مستندات اضافه</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                  </tbody>
                </table>
                </div>
               </div>
            </div>

            </div>

          </div>
            <div className="card-panel white ">
             <div className="row">
                <div className="col s12">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab col s3"><a className="active" href="#lastartists" className="black-text">آخرین هنرمندان</a></li>
                  </ul>
                </div>
                <div id="lastartists" className="col s12 top-buffer">
                <div className="row">
                  <div className="col s12">
                     <table className="bordered">
                      <thead>
                        <tr>
                          <th>نام و نام خانوادگی</th>
                          <th>حوزه کاری</th>
                          <th >جزییات</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                           <td>علی اکبری</td>
                          <td>خواننده</td>
                         <td><a href="#"><i className="small material-icons">info_outline</i></a></td>

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

export default Dashboard;
