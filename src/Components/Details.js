import React, { Component } from 'react';
import Data from '../facultyall.json';
import Panel from './Panel';
import '../loading.css';
import '../detailsStyle.css';
import TimeTable from './TimeTable.js';

class Details extends Component {
	state = {};
	componentDidMount() {
		console.log('Comonent mounted');
		let id = this.props.match.params.empid;
		let data = Data.find((x) => x.empId === id);
		this.setState(data);
	}

	render() {
		return (
			<div className='detailsPage'>
				{this.state.empId == null ? (
					<div className='center' style={{ marginTop: 100 }}>
						<div className='lds-ripple'>
							<div></div>
							<div></div>
						</div>
					</div>
				) : (
					<div>
						<Panel tab={this.state} />
						<TimeTable www={this.state.whenwherewhat} />
					</div>
				)}
			</div>
		);
	}
}

export default Details;
