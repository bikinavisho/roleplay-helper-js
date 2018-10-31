import React, {Component} from 'react';
import {connect} from 'react-redux';
import {storeUserData} from '../redux/actions/user-auth';
import CharacterNameForm from './CharacterNameForm';
import database from '../data/database';
import {popUpSignIn, redirectSignIn, logOff} from '../auth/authenticate';


class FindCharacter extends Component {
	submitCharacterForm(values) {
		// values.name
		database.ref('characters/' + 1).set({
			characterName: values.name
		});
	}

	login(type) {
		if (type === 'redirect') {
			redirectSignIn().then(this.props.storeUserData);
		}
		if (type === 'popup') {
			popUpSignIn().then(this.props.storeUserData)
		}
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
					<button onClick={logOff}>Logoff</button> :
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

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

export default connect(mapStateToProps, {storeUserData})(FindCharacter);