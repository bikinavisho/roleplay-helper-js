import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';


class UserHomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			noCharacterData: false,
			noRaceData: false
		};
	}

	componentDidMount() {
		if (this.props.userInfo && this.props.userInfo.isLoggedIn && this.props.userInfo.userData) {
			let {userData} = this.props.userInfo;
			// If there is no data, display alternative message
			if (_.isEmpty(userData.characters)) {
				this.setState({noCharacterData: true});
			} else {
				// TODO: Fetch Characters and display them
			}
			// If there is no data, display alternative message
			if (_.isEmpty(userData.races)) {
				this.setState({noRaceData: true})
			} else {
				// TODO: Fetch Races and display them
			}
		}
	}

	render() {
		// If user is not logged in, redirect them to the home page
		if (this.props.userInfo && this.props.userInfo.isLoggedIn === false) {
			return <Redirect to="/"/>;
		}


		return (
			<div>
				<h2>Your Characters</h2>
				<div>
					{this.state.noCharacterData &&
					<div>Looks like you don't have any characters yet. Start by creating one!</div>}
				</div>
				<hr/>
				<h2>Your Races</h2>
				<div>
					{this.state.noRaceData &&
					<div>Looks like you don't have any races yet. Start by creating one!</div>}
				</div>
			</div>
		);
	}
}

UserHomePage.propTypes = {
	userInfo: PropTypes.object   // redux state
};


function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

export default connect(mapStateToProps)(UserHomePage);