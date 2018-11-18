import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withCookies} from 'react-cookie';
import '../css/responsive-menu.css';
import {popUpSignIn, logOff} from '../auth/authenticate';
import {storeUserData, clearUserData, createNewUser} from '../redux/actions/user-auth';
import {putUserIntoCookies, removeUserFromCookies} from '../utils/cookie-utils';


class HeaderMenu extends Component {
	constructor(props) {
		super(props);

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		document.getElementById('toggle').addEventListener('click', function (e) {
			document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
			document.getElementById('toggle').classList.toggle('x');
		});
	}

	login() {
		popUpSignIn().then(() => {
			this.props.storeUserData();
			this.props.createNewUser();
			putUserIntoCookies(this.props.cookies);
		})
	}

	logout() {
		logOff().then(() => {
			this.props.clearUserData();
			removeUserFromCookies(this.props.cookies);
		});
	}

	render() {
		return (
			<div className="custom-menu-wrapper">
				<div className="pure-menu custom-menu custom-menu-top">
					<a href="#" className="pure-menu-heading custom-menu-brand">Roleplay Helper</a>
					<a href="#" className="custom-menu-toggle" id="toggle">
						<s className="bar"/><s className="bar"/>
					</a>
				</div>
				<div
					className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked"
					id="tuckedMenu">
					<div className="custom-menu-screen"/>
					<ul className="pure-menu-list">
						<li className="pure-menu-item">
							<Link to="/" className="pure-menu-link">Home</Link>
						</li>
						{this.props.userInfo.isLoggedIn && this.props.userInfo.userData &&
							<li className="pure-menu-item">
								<Link to={'/user/' + this.props.userInfo.userData.uid} className="pure-menu-link">
									<i className="fas fa-user"/>&nbsp;User: {this.props.userInfo.loggedInUser.displayName}
								</Link>
							</li>
						}
						<li className="pure-menu-item">
							{this.props.userInfo.isLoggedIn
								? <a href="javascript:" className="pure-menu-link" onClick={this.logout}>
									<i className="fas fa-sign-out-alt"/>
									&nbsp;Logout
								</a>
								: <a href="javascript:" className="pure-menu-link" onClick={this.login}>
									<i className="fas fa-sign-in-alt"/>
									&nbsp;Login
								</a>
							}
						</li>
					</ul>
				</div>
			</div>
		);
	};
}

HeaderMenu.propTypes = {
	cookies: PropTypes.object,			// from react-cookies (withCookies)
	clearUserData: PropTypes.func,
	createNewUser: PropTypes.func,
	storeUserData: PropTypes.func,
	userInfo: PropTypes.object
};

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

export default withCookies(connect(mapStateToProps, {storeUserData, clearUserData, createNewUser})(HeaderMenu));