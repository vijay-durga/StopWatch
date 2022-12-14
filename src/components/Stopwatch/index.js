import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onStart = () => {
    this.timerID = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onStop = () => {
    clearInterval(this.timerID)
  }

  onReset = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerID)
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const result = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-cont">
        <h1 className="head">Stopwatch</h1>
        <div className="time-cont">
          <div className="img-title-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch"
            />
            <span>Timer</span>
          </div>
          <h1>{result}</h1>
          <div>
            <button
              type="button"
              className="start-button"
              onClick={this.onStart}
            >
              start
            </button>
            <button type="button" className="stop-button" onClick={this.onStop}>
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
