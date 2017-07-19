import React, { Component } from 'react';
import Navbar from './Navbar.js';

class Events extends Component {
  render() {
    return (
<div>
	<Navbar />

       <div className="top-buffer row">
        <div className="row">
         <div className="col s12 m8 offset-m2">{/* col for 2 card in half of page*/}

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
                   <table className="bordered">
                    <thead>
                      <tr>
                          <th style={{textAlign : "right"}}>عنوان رویداد</th>
                          <th style={{textAlign : "right"}}>دسته بندی</th>
                          <th>تاریخ</th>
                          <th>جزییات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign : "right"}}>گردهمایی</td>
                        <td style={{textAlign : "right"}}>جلسه هنرمندان</td>
                        <td><a href="#"><i className="small material-icons">today</i></a></td>
                        <td><a href="#"><i className="small material-icons">info_outline</i></a></td>
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

          {/* finish in progress events*/}

        {/* start future events*/}
             <div id="futureevents" className="col s12 top-buffer">
              <div className="row">
                <div className="col s12">
                <table className="bordered">
                    <thead>
                      <tr>
                          <th style={{textAlign : "right"}}>عنوان رویداد</th>
                          <th style={{textAlign : "right"}}>دسته بندی</th>
                          <th>تاریخ</th>
                          <th >جزییات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign : "right"}}>گردهمایی</td>
                        <td style={{textAlign : "right"}}>جلسه هنرمندان</td>
                        <td><a href="#"><i className="small material-icons">today</i></a></td>
                        <td><a href="#"><i className="small material-icons">info_outline</i></a></td>
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
              {/* finish future events*/}

                {/* start requests for events*/}
             <div id="request" className="col s12 top-buffer">
              <div className="row">
                <div className="col s12">
                <table className="bordered">
                    <tbody>
                      <tr>
                          <td style={{textAlign : "right"}}>درخواست شرکت در رویداد استارتاپ ویکند</td>
                          <td style={{textAlign : "right"}}>از طرف رضا</td>
                          <td ><a href="#"><i className="small material-icons">today</i></a></td>
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
          {/* finish requests for events*/}

              </div>
            </div>
          </div>
          </div>
          </div>



</div>

    	);
		}
	}
export default Events;