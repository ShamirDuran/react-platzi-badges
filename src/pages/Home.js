import React from "react";
import "./styles/Home.css";
import PlatziConf from "../images/platziconf-logo.svg";
import Astronauts from "../images/astronauts.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <div className="Home d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-4 d-flex flex-column align-items-center justify-content-center">
              <img
                className="Home__logo"
                src={PlatziConf}
                alt="Logo platzi conf"
              />
              <div className="Home__body">
                <p className="Home__title">Print your badges</p>
                <p className="Home__text lead">
                  The easiest way to manage your conference
                </p>
              </div>
              <center>
                <Link
                  className="btn btn-success px-5 mt-2 Home__btn"
                  to="/badges"
                >
                  Start now
                </Link>
              </center>
            </div>
            <div className="col d-flex justify-content-end">
              <img
                className="Home__astronauts img-fluid"
                src={Astronauts}
                alt="Astronauts"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
