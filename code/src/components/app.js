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
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100")
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
        // .filter

        this.state.radioItems.map((station) => {
          return <Station
            name={station.name}
            image={station.image}
            tagline={station.tagline}
            color={station.color}
            liveaudioUrl={station.liveaudio.url} />
        })
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default App
