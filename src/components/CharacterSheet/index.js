import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import DiceRolls from './dice-rolls'
import StatBlock from './stat-block'
import ResourceBlock from './resource-block'
import {getCharacterData} from '../../utils/firebase-utils'

import '../../css/character-sheet.css'

class CharacterSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: undefined
    };

    // pulled from the URL
    this.characterId = props.match.params.id;
  }

  componentDidMount() {
    // if data is in reducer, pull from there
    if (this.props.characterList && this.props.characterList[this.characterId]) {
      this.setState({characterData: this.props.characterList[this.characterId]});
    } else {
      // otherwise, pull from db
      getCharacterData(this.characterId).then((response) => {
        this.setState({characterData: response});
        //TODO: PUT IN REDUX
      })
    }
  }

  render () {
    const twoColumns = 'pure-u-1-2'
    const rowTitle = 'row-title'
    const rowContent = 'row-content'

    return (
      <div>
        <div className='pure-g'>
          <div className={twoColumns}>
            <span className={rowTitle}>Name:</span> <span className={rowContent}>{this.state.characterData ? this.state.characterData.name : ''}</span>
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
CharacterSheet.propTypes = {
  characterList: PropTypes.object
}

function mapStateToProps(state) {
  return {
    characterList: state.characterList
  }
}

export default connect(mapStateToProps)(CharacterSheet)
