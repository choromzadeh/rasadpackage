import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

// type State = {
//   lat: number,
//   lng: number,
//   zoom: number,
// }

export default class SimpleExample extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [51.505, -0.09]
    return (
      <Map center={position} zoom={4}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}