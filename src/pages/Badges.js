import React, { Component } from "react";
import "./styles/Badges.css";
import ConfLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

export class Badges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.timeIntervalId = setInterval(() => {
      this.fetchData();
    }, 5000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      // Si la petición se realizo sin problemas se guarda la data en estado
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      // Si hubo algun error se guarda en el estado
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log({ prevProps: prevProps, prevState: prevState });
    // console.log({ props: this.props, state: this.state });
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.timeIntervalId);
  }

  render() {
    if (this.state.loading === true && this.state.data === undefined) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={ConfLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
