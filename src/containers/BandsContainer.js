import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <Band band={band} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({
    type: "ADD_BAND", band
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
