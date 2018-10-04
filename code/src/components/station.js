import React from "react"

class Station extends React.Component {

  render() {
    return (

      <div className="station">
        <h1>{this.props.name}</h1>
        <img src={this.props.image} alt="station" />
        <p>{this.props.tagline}</p>
      </div>

    )
  }

}

export default Station
