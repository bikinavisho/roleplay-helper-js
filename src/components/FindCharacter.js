import React, {Component} from 'react';
import CharacterNameForm from './CharacterNameForm';
import database from '../data/database';
import {popUpSignIn} from '../auth/authenticate';


class FindCharacter extends Component {
	submitCharacterForm(values) {
		// values.name
		database.ref('characters/' + 1).set({
			characterName: values
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
				<button onClick={popUpSignIn}>Log In</button>
				<CharacterNameForm onSubmit={this.submitCharacterForm}/>
			</div>
		);
	}
}

export default FindCharacter;