import React, { Component } from 'react';
import Navbar from './utility/Navbar.js';

class Artistdetail extends Component {
  render() {
    return (
<div>
<Navbar />
<div className="top-buffer row">
	<div className="row">
		<div className="col s12 m8 offset-m2">
			<div className="card-panel white">
				<div className="row">
				<b>مشخصات</b>
				</div>
				<div className="row">
					<img alt="profile" src="profile.png" />
				</div>
				<div className="row">	 
				<div className="col s12 m6">

					<p>شماره شناسنامه : 7403582550</p>
                     <p> تاریخ تولد : 12 تیر 1362</p>
                     <p>رشته اصلی هنری : خوانندگی</p>
                     <p>سایر رشته های هنری :نوازندگی گیتار</p>
                      <p>محل سکونت :انزلی ...</p>
                       <p>شماره همراه:09115680562</p>
                  </div> 
                  <div  className="col s12 m6">
                  <p>علی اکبری</p>
                     <p>نام پدر : محمد</p>
                     <p>جنسیت : مرد</p>
                     <p>وضعیت تاهل: مجرد</p>
                     <p>مدرک تحصیلی : لیسانس</p>
                     <p>کد ملی : 789</p>
                      <p>محل تولد : انزلی</p>
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
export default Artistdetail;