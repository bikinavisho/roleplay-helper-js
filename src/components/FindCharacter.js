import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {storeUserData, clearUserData, createNewUser} from '../redux/actions/user-auth';
import CharacterNameForm from './CharacterNameForm';
import database from '../data/database';
import {popUpSignIn, redirectSignIn, logOff} from '../auth/authenticate';
import * as firebase from 'firebase/app';
import 'firebase/auth';


class FindCharacter extends Component {
	constructor(props) {{
		super(props);

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}}

	componentDidMount() {
		if (firebase.auth().currentUser) {
			this.props.storeUserData();
		}
	}

	submitCharacterForm(values) {
		// values.name
		database.ref('characters/' + 1).set({
			characterName: values.name
		});
	}

	login(type) {
		if (type === 'redirect') {
			redirectSignIn().then(() => {
				this.props.storeUserData();
				createNewUser();
			});
		}
		if (type === 'popup') {
			popUpSignIn().then(() => {
				this.props.storeUserData();
				createNewUser();
			})
		}
	}

	logout() {
		logOff().then(this.props.clearUserData);
	}

	render() {
		return (
			<div>
				<header>
					<h1>Towers of Divinity</h1>
				</header>
				<p>
					To get started, enter your character's name in the form below.
				</p>
				{ this.props.userInfo.isLoggedIn ?
					<button onClick={this.logout}>Logoff</button> :
					<React.Fragment>
						<button onClick={() => {this.login('popup')}}>Log In (Pop-up)</button>
						<button onClick={() => {this.login('redirect')}}>Log In (Redirect)</button>
					</React.Fragment>

				}

				<CharacterNameForm onSubmit={this.submitCharacterForm}/>
			</div>
		);
	}
}

FindCharacter.propTypes = {
	clearUserData: PropTypes.func,
	userInfo: PropTypes.object,
	storeUserData: PropTypes.func
};

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

export default connect(mapStateToProps, {storeUserData, clearUserData})(FindCharacter);