import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CharacterNameForm from './CharacterNameForm';
import database from '../data/database';


class Home extends Component {
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
				{this.props.userInfo.isLoggedIn
					? <CharacterNameForm onSubmit={this.submitCharacterForm}/>
					:<p>
						Welcome to the roleplay helper! To get started, please log in!
					</p>
				}
			</div>
		);
	}
}

Home.propTypes = {
	userInfo: PropTypes.object
};

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

export default connect(mapStateToProps)(Home);