import React from "react"

class Station extends React.Component {

  render() {
    const channelColor = {
      backgroundColor: {
        backgroundColor: `#${this.props.color}`
      }
    }

    return (
      <div className="stationWrapper">
        <div className="station" style={channelColor.backgroundColor}>
          <div className="stationImage">
            <img src={this.props.image} alt="station logo" />
          </div>
          <div className="stationText">
            <h2>{this.props.name}</h2>
          </div>
          <div className="stationTagline">
            <p>{this.props.tagline}</p>
          </div>
          <div className="stationAudio">
            <audio controls>
              <source src={this.props.liveaudioUrl} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    )
  }

}

export default Station
