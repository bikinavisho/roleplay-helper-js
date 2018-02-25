import React, {Component} from 'react';
import CharacterNameForm from './CharacterNameForm';


class FindCharacter extends Component {
	submitCharacterForm(values) {
		// values.name
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
				<CharacterNameForm onSubmit={this.submitCharacterForm}/>
			</div>
		);
	}
}

export default FindCharacter;