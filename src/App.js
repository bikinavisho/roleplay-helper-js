import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import FindCharacter from './components/FindCharacter';
import './App.css';
import CharacterSheet from "./components/CharacterSheet/";


class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={FindCharacter}/>
				<Route path='/character' component={CharacterSheet}/>
			</Switch>
		);
	}
}

export default App;
