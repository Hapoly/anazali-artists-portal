import React, { Component } from 'react';
import Navbar from './utility/Navbar.js';

class Messages extends Component {
  render() {
    return (
    	<div>
      <Navbar/>


       <div className="top-buffer row">
        <div className="row">
{/*start  messages card*/}
           <div className="col s12 m8 offset-m2">
            <div className="card-panel white">
             <div className="row">
              <div className="col s12">
                <ul className="tabs tabs-fixed-width">
                  <li className="tab col s3"><a className="active black-text" href="#send">ارسال پیام</a></li>
                  <li className="tab col s3"><a href="#newmessage" className="black-text">پیام های جدید</a></li>
                  <li className="tab col s3"><a  href="#sent" className="black-text">پیام های ارسال شده</a></li>
                </ul>
              </div>
{/*start send in message card*/}
            <div id="send" className="col s12">
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
          {/* finish send in message card*/}
        {/* start new messages in message card*/}
             <div id="newmessage" className="col s12 top-buffer">
              <div className="row">
              <div className="col s12">
                
                <table className="bordered">
                  <thead>
                    <tr>
                        <th style={{textAlign : "right"}}>فرستنده</th>
                        <th style={{textAlign : "right"}}>عنوان</th>
                        <th>تاریخ</th>
                        <th>حذف</th>
                        <th>مشاهده</th>
                        
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td style={{textAlign : "right"}}>علی اکبری</td>
                      <td style={{textAlign : "right"}}>مشکل مالی در غرفه ۱۸</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">today</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                    <tr>
                      <td style={{textAlign : "right"}}>ناهید افشار</td>
                      <td style={{textAlign : "right"}}>سلام</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">today</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                    <tr>
                      <td style={{textAlign : "right"}}>مریم وجودی</td>
                      <td style={{textAlign : "right"}}>ارسال مستندات اضافه</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">today</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="disabled"><a href="#!"><i className="material-icons"> chevron_right</i></a></li>
                  <li className="active"><a href="#!">1</a></li>
                  <li className="waves-effect"><a href="#!">2</a></li>
                  <li className="waves-effect"><a href="#!">3</a></li>
                  <li className="waves-effect"><a href="#!">4</a></li>
                  <li className="waves-effect"><a href="#!">5</a></li>
                  <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                </ul>
                </div>
               </div>
            </div>
          {/*finish new message in message card*/}

           <div id="sent" className="col s12 top-buffer">
              <div className="row">
              <div className="col s12">
                
                <table className="bordered">
                  <thead>
                    <tr>
                        <th style={{textAlign : "right"}}>فرستنده</th>
                        <th style={{textAlign : "right"}}>عنوان</th>
                        <th>تاریخ</th>
                        <th>حذف</th>
                        <th>مشاهده</th>
                        
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td style={{textAlign : "right"}}>علی اکبری</td>
                      <td style={{textAlign : "right"}}>مشکل مالی در غرفه ۱۸</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">today</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                    <tr>
                      <td style={{textAlign : "right"}}>ناهید افشار</td>
                      <td style={{textAlign : "right"}}>سلام</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">today</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                    <tr>
                      <td style={{textAlign : "right"}}>مریم وجودی</td>
                      <td style={{textAlign : "right"}}>ارسال مستندات اضافه</td>
                      <td className="text-center"><a href="#"><i className="small material-icons">today</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                    </tr>
                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="disabled"><a href="#!"><i className="material-icons"> chevron_right</i></a></li>
                  <li className="active"><a href="#!">1</a></li>
                  <li className="waves-effect"><a href="#!">2</a></li>
                  <li className="waves-effect"><a href="#!">3</a></li>
                  <li className="waves-effect"><a href="#!">4</a></li>
                  <li className="waves-effect"><a href="#!">5</a></li>
                  <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                </ul>
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