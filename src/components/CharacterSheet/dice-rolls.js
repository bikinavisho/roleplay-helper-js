import React, {Component} from 'react';


class DiceRolls extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contents: []
		};

		this.roll = this.roll.bind(this);
	}

	roll(di) {
		return () => {
			//TODO: MAKE DICE ROLLS TRULY RANDOM BY USING RANDOM.ORG's API
			let result = (
				<span>
					rolled 1d{di} : {getRandomInt(1, di + 1)}
				</span>
			);
			this.setState({contents: [...this.state.contents, result]})
		};

	}

	render() {
		return (
			<table className="pure-table roll-table">
				<thead>
				<tr>
					<th>Rolls</th>
				</tr>
				</thead>

				<tbody>
				{this.state.contents.map((row, index) => {
					return (
						<tr key={index}>
							<td>{row}</td>
						</tr>
					);
				})}

				<tr>
					<td>
						{[3, 6, 8, 10, 12, 20, 100].map((diValue, index) => {
							return (
								<span key={index}>
									<button onClick={this.roll(diValue)} className="pure-button">1d{diValue}</button>
									&nbsp;
								</span>
							);
						})}
					</td>
				</tr>
				</tbody>
			</table>
		);
	}
}

export default DiceRolls;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}