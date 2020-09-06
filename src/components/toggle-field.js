import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/toggle-field.css'

class ToggleField extends Component {
  constructor (props) {
    super(props)

    this.onToggle = this.onToggle.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      toggle: false,
      value: props.initialValue
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
      // User presses enter or clicks away to exit input
      return (
        <form className='pure-form' onSubmit={this.onToggle}>
          <input className='toggled-field' onChange={this.onChange} onBlur={this.onToggle} type='number' value={this.state.value} size={3}/>
        </form>
      )
    } else {
      return (
        <span onDoubleClick={this.onToggle}>
          {this.state.value}
        </span>
      )
    }
  }
}

ToggleField.props = {
  initialValue: PropTypes.number,
  inputWidth: PropTypes.string
};

ToggleField.defaultProps = {
  initialValue: 0
};

export default ToggleField
