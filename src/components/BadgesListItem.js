import React, { Component } from "react";
import TwitterLogo from "../images/twitter-logo.svg";
import Gravatar from "./Gravatar";

export default class BadgesListitem extends Component {
  render() {
    return (
      <div className="row d-flex align-items-center">
        <div className="col-auto pr-0">
          <Gravatar
            className="img-fluid rounded-circle"
            email={this.props.badge.email}
          />
        </div>
        <div className="col">
          <ul className="list-unstyled">
            <li className="font-weight-bold">
              {this.props.badge.firstName} {this.props.badge.lastName}
            </li>
            <li className="text-primary">
              <img
                className="img-fluid mr-2"
                src={TwitterLogo}
                alt="TwitterLogo"
                height="23"
                width="23"
              />
              {this.props.badge.twitter}
            </li>
            <li className="font-weight-light">{this.props.badge.jobTitle}</li>
          </ul>
        </div>
      </div>
    );
  }
}
