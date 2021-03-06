import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import Home from './components/Home'
import './css/App.css'
import CharacterSheet from './components/CharacterSheet/'
import HeaderMenu from './components/HeaderMenu'
import UserHomePage from './components/UserHomePage'

class App extends Component {
  render () {
    return (
      <Fragment>
        <HeaderMenu />
        <div className='shell'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/character/:id' component={CharacterSheet} />
            <Route path='/user/:id' component={UserHomePage} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

App.propTypes = {
  cookies: PropTypes.object 		// from react-cookies (withCookies)
}

export default withCookies(App)
