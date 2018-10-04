import React from "react"

class Stations extends React.Component {

render() {
    return (
      <div className="station"
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt="station"/>
        <p>{this.props.tagline}</p>

    )
  }

}

export default Stations
