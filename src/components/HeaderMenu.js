import React, {Component} from 'react';
import '../css/responsive-menu.css';


export default class HeaderMenu extends Component {
	componentDidMount() {
		document.getElementById('toggle').addEventListener('click', function (e) {
			document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
			document.getElementById('toggle').classList.toggle('x');
		});
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
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">GitHub</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Twitter</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Apple</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Google</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Wang</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">Yahoo</a></li>
						<li className="pure-menu-item"><a href="#" className="pure-menu-link">W3C</a></li>
					</ul>
				</div>
			</div>
		);
	};
}