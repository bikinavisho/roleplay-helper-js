import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../css/responsive-menu.css';
import {popUpSignIn, logOff} from '../auth/authenticate';
import {storeUserData, clearUserData, createNewUser} from '../redux/actions/user-auth';


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
		})
	}

	logout() {
		logOff().then(this.props.clearUserData);
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
						<li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>
						{this.props.userInfo.isLoggedIn &&
							<li className="pure-menu-item">
								<Link to="/user/" className="pure-menu-link">{this.props.userInfo.loggedInUser.displayName}</Link>
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

export default connect(mapStateToProps, {storeUserData, clearUserData, createNewUser})(HeaderMenu);