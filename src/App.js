import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import FindCharacter from './components/FindCharacter';
import './App.css';
import CharacterSheet from "./components/CharacterSheet/";


class App extends Component {
	componentDidMount() {
		console.log('NONSTRING ', process.env.REACT_APP_NONSTRING)
		console.log('STRING ', process.env.REACT_APP_STRING)
	}

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
