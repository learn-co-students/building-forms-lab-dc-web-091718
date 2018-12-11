import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Band from '../components/Band';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand = {this.props.addBand} />
        <ul>
          {this.props.bands.map((band, index) => <Band key = {index} band = {band} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }

};

const mapDispatchToState = dispatch => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", payload: band})
  }
};

export default connect(mapStateToProps, mapDispatchToState)(BandsContainer)
