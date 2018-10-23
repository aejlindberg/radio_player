import React from "react"
import Station from "./station.js"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      radioItems: []
    }
  }

  componentDidMount() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100")
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          radioItems: json.channels
        })
      })
  }

  render() {
    if (this.state.radioItems.length > 0) {
      return (
        <div className="App">
          <div className="wrapper">
            <div className="backgroundImage">
              <img src="/background.jpg" alt="confetti" />
            </div>
            <div className="header">
              <img id="SR" src="./SR.svg" alt="" />
              <img id="radio" src="./radio.svg" alt="" />
            </div>
            {this.state.radioItems.map((station) => {
              return (
                <Station
                  key={station.id}
                  name={station.name}
                  image={station.image}
                  tagline={station.tagline}
                  color={station.color}
                  liveaudioUrl={station.liveaudio.url} />
              )
            })}
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default App
