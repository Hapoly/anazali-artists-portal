import React, { Component } from 'react';

class ProfileCard extends Component {
    render() {
    return (
<div className="row">
  <div className="col m12 s12">
    <div className="card horizontal">
      <div className="card-image">
        <img src="https://lorempixel.com/100/190/nature/6" style={{width:"150px",height:"190px"}}/>
      </div>
      <div className="card-stacked">
        <h5 style={{direction:"rtl",marginRight:"20px"}}> نام و نام خانوادگی</h5>
        <div className="card-content" >
         <p>حرفه های شغلی</p>
         <p>عنوان هنری</p>
        </div>
        <div className="card-action" >
          <div className="row">
            <button  className="btn waves-effect waves-light" type="button" >وضعیت
                    </button>
          <a href="#">جزییات</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default ProfileCard;