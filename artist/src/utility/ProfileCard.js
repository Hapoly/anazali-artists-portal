import React, { Component } from 'react';

class ProfileCard extends Component {
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

export default ProfileCard;