import React, { Component } from 'react';

class EventCard extends Component {
    render() {
    return (
<div className="row">
  <div className="col m12 s12">
      <div className="card horizontal"style={{direction:"ltr"}}>
      <div className="card-image">
        <img src="https://lorempixel.com/100/190/nature/6" style={{width:"150px",height:"190px"}}/>
      </div>
      <div className="card-stacked">
        <h4 style={{direction:"rtl",marginRight:"20px"}}>عنوان رویداد</h4>
        <div className="card-content" style={{direction:"rtl"}}>
          
          <p>توضیحات...</p>
        </div>
        <div className="card-action" style={{direction:"rtl"}}>
          <a href="#">اطلاعات بیشتر</a>
        </div>
      </div>
    </div>
    </div>
    </div>
 

    );
  }
}

export default EventCard;