/* eslint-disable no-script-url, jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import '../css/responsive-menu.css'
import { popUpSignIn, logOff } from '../auth/authenticate'
import { storeUserData, clearUserData } from '../redux/actions/user-auth'
import { checkForAuthentication } from '../utils/firebase-utils'

class HeaderMenu extends Component {
  constructor (props) {
    super(props)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount () {
    document.getElementById('toggle').addEventListener('click', function (e) {
      document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked')
      document.getElementById('toggle').classList.toggle('x')
    })
    checkForAuthentication((user) => {
      if (user) {
        this.props.storeUserData(false)
      }
    })
  }

  login () {
    popUpSignIn().then(() => {
      this.props.storeUserData(true)
    })
  }

  logout () {
    logOff().then(() => {
      this.props.clearUserData()
    })
  }

  render () {
    return (
      <div className='custom-menu-wrapper'>
        <div className='pure-menu custom-menu custom-menu-top'>
          <Link to='/' className='pure-menu-heading custom-menu-brand'>Roleplay Helper</Link>
          <a href='javascript:' className='custom-menu-toggle' id='toggle'>
            <s className='bar' /><s className='bar' />
          </a>
        </div>
        <div
          className='pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked'
          id='tuckedMenu'
        >
          <div className='custom-menu-screen' />
          <ul className='pure-menu-list'>
            <li className='pure-menu-item'>
              <NavLink exact to='/' className='pure-menu-link' activeClassName='menu-bar-selected'>
                <i className="fas fa-home"/>&nbsp;Home
              </NavLink>
            </li>
            {this.props.userInfo.isLoggedIn && this.props.userInfo.userData &&
              <li className='pure-menu-item'>
                <NavLink to={'/user/' + this.props.userInfo.userData.uid} className='pure-menu-link' activeClassName='menu-bar-selected'>
                  <i className='fas fa-user' />&nbsp;User: {this.props.userInfo.loggedInUser.displayName}
                </NavLink>
              </li>}
            <li className='pure-menu-item'>
              {this.props.userInfo.isLoggedIn
                ? <a href='javascript:' className='pure-menu-link' onClick={this.logout}>
                  <i className='fas fa-sign-out-alt' />
									&nbsp;Logout
                  </a>
                : <a href='javascript:' className='pure-menu-link' onClick={this.login}>
                  <i className='fas fa-sign-in-alt' />
									&nbsp;Login
                  </a>}
            </li>
          </ul>
        </div>
      </div>
    )
  };
}

HeaderMenu.propTypes = {
  clearUserData: PropTypes.func,
  storeUserData: PropTypes.func,
  userInfo: PropTypes.object
}

function mapStateToProps (state) {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, {
  storeUserData,
  clearUserData
})(HeaderMenu)
