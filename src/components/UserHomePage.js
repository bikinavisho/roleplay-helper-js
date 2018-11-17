import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class UserHomePage extends Component {
	componentDidMount() {
		console.log("this.props.match ", this.props.match);
	}

	render() {
		if (!this.props.userInfo.isLoggedIn) {
			return <Redirect to="/"/>;
		}


		return (
			<div>
				<h1>Your Characters</h1>
			</div>
		);
	}
}
UserHomePage.propTypes = {
	match: PropTypes.shape({			// react-router-dom
		params: PropTypes.object,
		isExact: PropTypes.bool,
		path: PropTypes.string,
		url: PropTypes.string
	}),
	userInfo: PropTypes.object   // redux state
};


function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

export default connect(mapStateToProps)(UserHomePage);