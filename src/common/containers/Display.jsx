import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getGeoLocation } from "../actions/action-geolocation";

import Location from "../components/Location";

class Display extends Component {
  constructor(props) {
    super(props);

    props.getGeoLocation();
  }
  render() {
    const { latitude, longitude } = this.props;
    return (
      <div>
        <Location latitude={latitude} longitude={longitude} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { latitude, longitude } = state.geolocation;
  return {
    latitude,
    longitude,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getGeoLocation,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Display);
