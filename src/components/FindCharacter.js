import React, {Component} from 'react';
import CharacterNameForm from './CharacterNameForm';
import database from '../data/database';
import {popUpSignIn, getCredentials, redirectSignIn} from '../auth/authenticate';


class FindCharacter extends Component {
	submitCharacterForm(values) {
		// values.name
		database.ref('characters/' + 1).set({
			characterName: values.name
		});
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
				<button onClick={popUpSignIn}>Log In (Pop-up)</button>
				<button onClick={redirectSignIn}>Log In (Redirect)</button>
				<CharacterNameForm onSubmit={this.submitCharacterForm}/>
			</div>
		);
	}
}

export default FindCharacter;