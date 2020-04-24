import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ResourceBlock extends Component {
  constructor (props) {
    super(props)

    this.statNames = [
      'Health', 'Vigor', 'Wounds', 'Fatigue', 'Focus'
    ]
  }

  onSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className='pure-form' onSubmit={this.onSubmit}>
        <table className='pure-table pure-table-horizontal stat-table'>
          <thead>
            <tr>
              <th>Stat</th>
              <th>Current</th>
              <th>Max</th>
            </tr>
          </thead>
          <tbody>
            {this.statNames.map((stat, index) => {
              return (
                <tr key={index} className='resource-row'>
                  <td>{stat}</td>
                  <td><Field name={stat} component='input' type='number' /></td>
                  <td>20</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </form>
    )
  }
}

export default reduxForm({
  form: 'characterResource',
  initialValues: {
    Health: 20,
    Vigor: 20,
    Wounds: 0,
    Fatigue: 0,
    Focus: 1
  }
})(ResourceBlock)
