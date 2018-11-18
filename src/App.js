import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import Home from './components/Home';
import './css/App.css';
import CharacterSheet from "./components/CharacterSheet/";
import HeaderMenu from './components/HeaderMenu';
import UserHomePage from './components/UserHomePage';
import {getUserFromCookies} from './utils/cookie-utils';
import {isUserAuthenticated} from './utils/firebase-utils';
import {reinstantiateUserFromCookie} from './redux/actions/user-auth';


class App extends Component {
	componentDidMount() {
		// If user is not logged in, check to see if auth user is inside cookies
		// if (!this.props.userInfo.isLoggedIn) {
		// 	getUserFromCookies(this.props.cookies);
		// 	this.props.reinstantiateUserFromCookie();
		// }
	}

	render() {
		console.log('APP get all cookies: ', this.props.cookies.getAll());
		console.log('APP user is authenticated: ', isUserAuthenticated());
		return (
			<React.Fragment>
				<HeaderMenu/>
				<div className="shell">
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/character/:id' component={CharacterSheet}/>
						<Route path='/user/:id' component={UserHomePage}/>
					</Switch>
				</div>
			</React.Fragment>
		);
	}
}

App.propTypes = {
	cookies: PropTypes.object, 		// from react-cookies (withCookies)
	reinstantiateUserFromCookie: PropTypes.func,	// from redux
	userInfo: PropTypes.object  	// from redux
};

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

export default withCookies(connect(mapStateToProps, {reinstantiateUserFromCookie})(App));
