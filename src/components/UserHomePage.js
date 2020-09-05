import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import _ from 'lodash'
import {initializeCharacterData} from '../redux/actions/character-access';

class UserHomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      noCharacterData: false,
      noRaceData: false
    }
  }

  componentDidMount () {
    if (this.props.userInfo && this.props.userInfo.isLoggedIn && this.props.userInfo.userData) {
      const { userData } = this.props.userInfo
      // If there is no data, display alternative message
      if (_.isEmpty(userData.characters)) {
        this.setState({ noCharacterData: true })
      }
      // If there is no data, display alternative message
      if (_.isEmpty(userData.races)) {
        this.setState({ noRaceData: true })
      }
    }
    if (this.props.userInfo && this.props.userInfo.isLoggedIn && _.isEmpty(this.props.characterList)) {
      this.props.initializeCharacterData();
    }
  }

  render () {
    // TODO: make this a HOC
    // If user is not logged in, redirect them to the home page
    if (this.props.userInfo && this.props.userInfo.isLoggedIn === false) {
      return <Redirect to='/' />
    }

    return (
      <div>
        {this.props.userInfo && this.props.userInfo.loggedInUser && this.props.userInfo.loggedInUser.displayName &&
          <Fragment>
            <h1>Hello, {this.props.userInfo.loggedInUser.displayName}.</h1>
            <hr />
          </Fragment>}

        <h2>Your Characters</h2>
        <div>
          {this.state.noCharacterData ?
            <div>Looks like you don't have any characters yet. Start by creating one!</div> :
            <ul>
              {_.toPairs(this.props.userInfo.userData.characters).map((character) => {
                return (<li><Link to={`/character/${character[0]}`}>{character[1]}</Link></li>)
              })}
            </ul>}
        </div>
        <hr />
        <h2>Your Races (feature WIP)</h2>
        <div>
          {this.state.noRaceData &&
            <div>Looks like you don't have any races yet. Start by creating one!</div>}
        </div>
      </div>
    )
  }
}

UserHomePage.propTypes = {
  characterList: PropTypes.object, // redux state
  userInfo: PropTypes.object // redux state
}

function mapStateToProps (state) {
  return {
    userInfo: state.userInfo,
		characterList: state.characterList
  }
}

export default connect(mapStateToProps, {initializeCharacterData})(UserHomePage)
