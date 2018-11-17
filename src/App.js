import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import FindCharacter from './components/Home';
import './css/App.css';
import CharacterSheet from "./components/CharacterSheet/";
import HeaderMenu from './components/HeaderMenu';


class App extends Component {
	render() {
		return (
			<React.Fragment>
				<HeaderMenu/>
				<div className="shell">
					<Switch>
						<Route exact path='/' component={FindCharacter}/>
						<Route path='/character' component={CharacterSheet}/>
					</Switch>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
