import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import FindCharacter from './components/FindCharacter';
import './App.css';
import CharacterSheet from "./components/CharacterSheet/";
import HeaderMenu from './components/HeaderMenu';


class App extends Component {
	render() {
		return (
			<React.Fragment>
				<HeaderMenu/>
				<Switch>
					<Route exact path='/' component={FindCharacter}/>
					<Route path='/character' component={CharacterSheet}/>
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
