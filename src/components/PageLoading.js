import React, { Component } from "react";
import "./styles/PageLoading.css";
import Loader from "./Loader";

export default class PageLoading extends Component {
  render() {
    return (
      <div className="PageLoading">
        <Loader />
      </div>
    );
  }
}
