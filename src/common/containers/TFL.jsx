import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getDisruptions } from "../actions/action-tfl";
import Menu from "../components/Menu";
import Display from "../containers/Display";

import cls from "./TFL.css";

class TFL extends Component {
  constructor(props) {
    super(props);

    this.modes = [
      "Tube",
      "Overground",
      "DLR",
    ];

    this.props.getDisruptions(this.modes);
  }
  render() {
    const { disruptions } = this.props;
    return (
      <div className={cls.app}>
        <Menu options={disruptions} />
        <Display />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    disruptions: state.tfl.disruptions,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getDisruptions,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TFL);
