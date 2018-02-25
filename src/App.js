import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FindCharacter from './components/FindCharacter';
import './App.css';
import CharacterSheet from "./components/CharacterSheet/";


class App extends Component {

	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={FindCharacter}/>
					<Route path='/character' component={CharacterSheet}/>
				</div>
			</Router>
		);
	}
}

export default App;
