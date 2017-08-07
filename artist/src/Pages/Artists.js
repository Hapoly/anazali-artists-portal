import React, { Component } from 'react';
import Navbar from '../utility/Navbar.js';
import ProfileCard from '../utility/ProfileCard';
import users from '../libs/users';

/* cookies progress */
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Artists extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [
      ]
    };
    
  }

  componentDidMount(){
    
    users.getAllUsers(
      cookies.get('email'),
      cookies.get('password'),
      0,10,
      {
        email:      "",
        first_name: "",
        last_name:  "",
        nickname:   ""
      },
      (users) => {
        var userList = [
        ];
        for(var i=0; i<users.length; i++)
          userList.push(<ProfileCard information={users[i]}/>);
        this.setState({
          users : userList
        });
      },
      () => {
        console.log('failed!');
      }
    )
    
  }
  render() {
    return (
    <div>
      <Navbar />
      <div className="top-buffer row">
            <div className="row">
              <div className="col s12 m8 offset-m2">
                <div className="card-panel white">
                <div className="row">
                  <div className="col s12">
                    <ul className="tabs tabs-fixed-width">
                      <li className="tab col s3"><a className="active black-text" href="#artistslist"s>هنرمندان</a></li>
                      <li className="tab col s3"><a href="#registerreq" className="black-text">درخواست های ثبت نام</a></li>
                    </ul>
                  </div>
                  <div id="artistslist" className="col s12 top-buffer">
                    <div className="row">
                      <div className="col s12">
                        {this.state.users}
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


                  <div id="registerreq" className="col s12 top-buffer">
                    <div className="row">
                      <div className="col s12">
                        <table className="bordered">
                          <thead>
                            <tr>
                              <th  style={{textAlign : "right"}}>نام و نام خانوادگی</th>
                              <th  style={{textAlign : "right"}}>حوزه کاری</th>
                              <th >جزییات</th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                        <td  style={{textAlign : "right"}}>علی اکبری</td>
                        <td style={{textAlign : "right"}}>خواننده</td>
                        <td><a href="Artistdetail"><i className="small material-icons">info_outline</i></a></td>
                        <td>
                        <button className="btn btn-success btn-sm">تایید</button> <button className="btn btn-danger btn-sm">رد</button>
                        </td>
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
    </div>);
  }
}
export default Artists;