import React, { Component } from 'react'
import '../css/toggle-field.css'

class ToggleField extends Component {
  constructor (props) {
    super(props)

    this.onToggle = this.onToggle.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      toggle: false,
      value: 0
    }
  }

  onToggle (event) {
    if (this.state.toggle) {
      this.setState({ toggle: false })
      event.preventDefault()
    } else {
      this.setState({ toggle: true })
    }
  }

  onChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    if (this.state.toggle) {
      // User presses enter to exit input
      return (
        <div>
          <form className='pure-form' onSubmit={this.onToggle}>
            <input className='toggled-field' onChange={this.onChange} type='number' value={this.state.value} />
          </form>
        </div>
      )
    } else {
      return (
        <div onDoubleClick={this.onToggle}>
          {this.state.value}
        </div>
      )
    }
  }
}

export default ToggleField
