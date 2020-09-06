import React, { Component } from 'react'
import ToggleField from '../toggle-field'

class StatBlock extends Component {
  constructor (props) {
    super(props)

    this.statNames = [
      'Power', 'Agility', 'Constitution', 'Acuity', 'Intellect'
    ]
  }

  render () {
    return (
      <table className='pure-table pure-table-horizontal stat-table'>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
            <th>XP</th>
          </tr>
        </thead>
        <tbody>
          {this.statNames.map((stat, index) => {
            return (
              <tr key={index} className='stat-row'>
                <td>{stat}</td>
                <td><ToggleField initialValue={10} /></td>
                <td>
                  {/* TODO: adjust width of ToggleField for XP fields */}
								0/10
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default StatBlock
