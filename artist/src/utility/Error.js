import React, { Component } from 'react';
import {getErrorMEssage} from './error-list';

class Error extends Component {
	constructor(props) {
		super(props);
  }
/* this is the main script render for Auth componenet */

  renderErrors = () => {
    var errors = [];
    console.log(this.props.errorList);
    for(var i=0; i<this.props.errorList.length; i++){
        errors.push(<li>{getErrorMEssage(this.props.errorList[i])}</li>);
    }
    return errors;
  }
  render() {
    return (
        <div className="row">
            <div className="col s12 m6 offset-m3 top-buffer">
                <div className="card-panel  red darken-1 white-text">
                    <ul>{this.renderErrors()}</ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Error;
