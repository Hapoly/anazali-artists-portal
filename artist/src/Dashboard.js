import React, { Component } from 'react';
import Navbar from './utility/Navbar.js';
import EventCard from './utility/EventCard.js';
import UsersModel from './server/users.js';

/* cookies progress */
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signupRequests : []
    };
  }

  componentDidMount() {
    this.generateSignupRequests();
  }
  generateSignupRequests = () => {
    var requests = UsersModel.getNewSignUpRequests();
    var list = [];
    for(var i =0; i<requests.length; i++){
      var req = requests[i];
      console.log("test");
      list.push(<tr>
                <td style={{textAlign : "right"}}>{req.firstName}</td>
                <td style={{textAlign : "right"}}>{req.lastName}</td>
                <td>
                <a href="!#"><i className="small material-icons">info_outline</i></a>
                </td>
                <td>
                <button className="btn btn-success btn-sm">تایید</button> <button className="btn btn-danger btn-sm">رد</button>
                </td>
                </tr>
        );
    }
    this.setState({
      signupRequests : list
    });
  }
  render() {
    return (
      <div>
      <Navbar/>


       <div className="top-buffer row">
        <div className="row">
        <div className="row">
          <div className="col s12 m6 "> {/* col for 2 card in half of page*/}

            <div className="card-panel white ">
             <div className="row"> {/* row for events card*/}
                <div className="col s12">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab col s3"><a className="active" href="#inprogress" className="black-text">رویداد های جاری</a></li>
                    <li className="tab col s3"><a href="#futureevents" className="black-text">رویداد های آینده</a></li>
                    <li className="tab col s3"><a href="#request" className="black-text"> درخواست ها</a></li>
                  </ul>
                </div>
        {/*start in progress events */}
             <div id="inprogress" className="col s12 top-buffer">
              <div className="row">
                <div className="col s12">
                   
                   
                      <EventCard/>
                    
                
                </div>
              </div>
            </div>

          {/* finish in progress events*/}

        {/* start future events*/}
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
              {/* finish future events*/}

                {/* start requests for events*/}
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
          {/* finish requests for events*/}

              </div>
            </div>
          </div>
        {/*start register requests*/}
           <div className="col s12 m6 ">
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
                        {this.state.signupRequests}
                      </tbody>
                  </table>
                  </div>
                </div>
            </div>

          </div>
          </div>
          </div>
           {/*finish register requests*/}
           </div>

<div className="row">
{/*start  messages card*/}
           <div className="col s12 m6 ">
            <div className="card-panel white">
             <div className="row">
              <div className="col s12">
                <ul className="tabs tabs-fixed-width">
                  <li className="tab col s3"><a className="active" href="#send" className="black-text">ارسال پیام</a></li>
                  <li className="tab col s3"><a href="#newmessage" className="black-text">پیام های جدید</a></li>
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
          {/*finish new message in message card*/}

            </div>

          </div>
          </div>
          <div className="col s12 m6 ">
        {/*card:last artists*/}
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
              {/* finish last artists*/}
              </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Dashboard;
