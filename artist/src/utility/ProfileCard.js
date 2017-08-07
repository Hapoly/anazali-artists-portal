import React, { Component } from 'react';

class ProfileCard extends Component {

  createArtFields = (artField) => {
    return (
      <div className="chip">
        {artField.title}
      </div>
    );
  }

  createEducations = (education) => {
    return (
      <div className="chip">
        {education.degree.title} {education.field.title}
      </div>
    )
  }

  statusBadget = (status) => {
    switch(status.code){
      case 0:
        return (
          <span className="new badge amber lighten-1" data-badge-caption={status.title}></span>
        );
      case 1:
        return (
          <span className="new badge light-green" data-badge-caption={status.title}></span>
        );
      case 2:
        return (
          <span className="new badge grey lighten-1" data-badge-caption={status.title}></span>
        );
      case 3:
        return (
          <span className="new badge deep-orange accent-3" data-badge-caption={status.title}></span>
        );
      
    }
  }
  render() {
    return (
    <div className="row">
      <div className="col m12 s12">
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" style={{width:"150px",height:"190px"}}/>
          </div>
          <div className="card-stacked">
            <h5 style={{direction:"rtl",marginRight:"20px"}}>{this.props.information.first_name + " " + this.props.information.last_name}
            <i>({this.props.information.info.nickname})</i>
            </h5>
            <div className="card-content" >
              <div className="row">
                <div className="col m6 s12">
                  حرفه‌های هنری:{this.props.information.info.art_fields.map(this.createArtFields)}
                </div>
                <div className="col m6 s12">
                  تحصیلات:{this.props.information.info.educations.map(this.createEducations)}
                </div>
              </div>
              <div className="row">
                <div className="col m12 s12">
                  {this.statusBadget(this.props.information.status)}
                </div>
              </div>
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