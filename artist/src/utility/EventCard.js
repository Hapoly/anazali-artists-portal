import React, { Component } from 'react';

class EventCard extends Component {
    render() {
    return (
<div className="row">
  <div className="col m12 s12">
      <div className="card-panel white">
     <div className="row">   
        <div className="col s12 m6">
             <div className="card-image" style={{marginLeft: 0}}>
                <img src="https://lorempixel.com/100/190/nature/6"/>
            </div> 
            
        </div>
        <div className="col s12 m6">
         <div className="card-stacked">
            <div className="card-content">
            <h2>عنوان رویداد</h2>
            <p>توضیحات رویداد</p>
            </div>
            <div className="card-action">
            <a href="#">اطلاعات بیشتر</a>
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

export default EventCard;