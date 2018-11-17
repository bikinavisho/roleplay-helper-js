import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import './css/App.css';
import CharacterSheet from "./components/CharacterSheet/";
import HeaderMenu from './components/HeaderMenu';
import UserHomePage from './components/UserHomePage';


class App extends Component {
	render() {
		return (
			<React.Fragment>
				<HeaderMenu/>
				<div className="shell">
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/character/:id' component={CharacterSheet}/>
						<Route path='/user/:id' component={UserHomePage}/>
					</Switch>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
