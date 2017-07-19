import React, { Component } from 'react';
import Navbar from './Navbar.js';

class Reports extends Component {
  render() {
    return (
    	<div>
      <Navbar/>

      
       <div className="top-buffer row">
        <div className="row">
{/*start reports card*/}
           <div className="col s12 m8 offset-m2">
            <div className="card-panel white">
             <div className="row">
              <div className="col s12">
                <ul className="tabs tabs-fixed-width">
                  <li className="tab col s3"><a className="active" href="#reportslist" className="black-text">گزارشات</a></li>
                  <li className="tab col s3"><a href="#newreportsform" className="black-text">پیام های فرم گزارش جدید</a></li>
                </ul>
              </div>
{/*start  report list card*/}
            <div id="reportslist" className="col s12 top-buffer">
              <div className="row">
              <div className="col s12">
                   <table className="bordered">
                  <thead>
                    <tr>
                        
                        <th style={{textAlign : "right"}}>عنوان</th>
                        <th style={{textAlign : "right"}}>اجرا</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                       
                        
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td style={{textAlign : "right"}}></td>
                      <td style={{textAlign : "right"}}></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">mode_edit</i></a></td>
                      <td className="text-center"><a href="#"><i className="small material-icons">delete</i></a></td>
                     
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
          {/* finish report list card*/}
        {/* start new report form card*/}
             <div id="newreportsform" className="col s12 top-buffer">
              <div className="row">
              <div className="col s12">
              
                </div>
               </div>
            </div>
          {/*finish new report form card*/}
            </div>

          </div>
          </div>
          </div>
        </div>

      </div>
     
      );
  }
}
export default Reports;