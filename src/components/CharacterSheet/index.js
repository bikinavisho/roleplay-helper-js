import React, {Component} from 'react';
import DiceRolls from './dice-rolls';
import StatBlock from './stat-block';

import './character-sheet.css';

class CharacterSheet extends Component {
	render() {
		let twoColumns = "pure-u-1-2";
		let rowTitle = "row-title";
		let rowContent = "row-content";

		return (
			<div>
				<div className="pure-g">
					<div className={twoColumns}>
						<span className={rowTitle}>Name:</span> <span className={rowContent}>[NAME]</span>
					</div>
					<div className={twoColumns}>
						<span className={rowTitle}>Level:</span> <span className={rowContent}>[LEVEL]</span>
					</div>
				</div>

				<hr/>

				<div className="pure-g">
					<div className="pure-u-2-3">
						<div>
							Primary Stat Block
							<StatBlock/>
						</div>

						<div>Secondary Stat Block</div>
					</div>
					<div className="pure-u-1-3">
						<DiceRolls/>
					</div>
				</div>


			</div>
		);
	}
}

export default CharacterSheet;
