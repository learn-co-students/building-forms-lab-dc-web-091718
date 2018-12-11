import React from 'react'

const Band = props => {
  console.log(props)
  return(
    <li>{props.band.name}</li>
  )
}

export default Band
