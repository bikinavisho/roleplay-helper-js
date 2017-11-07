import React, {Component} from 'react';
import './App.css';
import CharacterNameForm from './components/CharacterNameForm';

class App extends Component {
  submitCharacterForm(values) {
    // values.name
  }

  render() {
    return (<div className="App">
      <header>
        <h1>Towers of Divinity</h1>
      </header>
      <p>
        To get started, enter your character's name in the form below.
      </p>
      <CharacterNameForm onSubmit={this.submitCharacterForm} />

    </div>);
  }
}

export default App;
