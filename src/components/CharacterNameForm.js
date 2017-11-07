import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class CharacterNameForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (<form onSubmit={handleSubmit} className="pure-form">
        <fieldset>
            <label htmlFor="name">Name: </label>
            <Field name="name" component="input" type="text"/>
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
        </fieldset>
    </form>);
  }
}

export default reduxForm({form: 'character'})(CharacterNameForm);
