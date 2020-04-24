import React, { Component } from 'react'
import DiceRolls from './dice-rolls'
import StatBlock from './stat-block'
import ResourceBlock from './resource-block'

import '../../css/character-sheet.css'

class CharacterSheet extends Component {
  render () {
    const twoColumns = 'pure-u-1-2'
    const rowTitle = 'row-title'
    const rowContent = 'row-content'

    return (
      <div>
        <div className='pure-g'>
          <div className={twoColumns}>
            <span className={rowTitle}>Name:</span> <span className={rowContent}>[NAME]</span>
          </div>
          <div className={twoColumns}>
            <span className={rowTitle}>Level:</span> <span className={rowContent}>[LEVEL]</span>
          </div>
        </div>

        <hr />

        <div className='pure-g'>
          <div className='pure-u-2-3 pure-g'>
            <div className='pure-u-lg-1-2 pure-u-1'>
							Primary Stat Block
              <StatBlock />
            </div>

            <div className='pure-u-lg-1-2 pure-u-1'>
							Secondary Stat Block
              <ResourceBlock />
            </div>
          </div>
          <div className='pure-u-1-3'>
            <DiceRolls />
          </div>
        </div>

      </div>
    )
  }
}

export default CharacterSheet
