import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CharacterNameForm from './CharacterNameForm';
// import database from '../data/database';
import {addCharacterToUser, initializeCharacterData} from '../redux/actions/character-submit';


class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			characterUid: undefined,
			redirectToCharacterSheet: false
		};

		this.submitCharacterForm = this.submitCharacterForm.bind(this);
	}

	submitCharacterForm(values) {
		// values.name contains the field's value
		let characterUid = this.props.addCharacterToUser(values.name);
		this.setState({
			redirectToCharacterSheet: true,
			characterUid
		});
	}

	componentDidMount() {
		this.props.initializeCharacterData();
	}

	render() {
		if (this.state.redirectToCharacterSheet && this.state.characterUid) {
			return (<Redirect to={`/characters/${this.state.characterUid}`} />);
		}

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
	addCharacterToUser: PropTypes.func,
	initializeCharacterData: PropTypes.func,
	userInfo: PropTypes.object
};

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

export default connect(mapStateToProps, {addCharacterToUser, initializeCharacterData})(Home);
