import React, { Component } from 'react';
import Data from '../facultyall.json';
import Panel from './Panel';
import '../loading.css';
import '../detailsStyle.css';
import TimeTable from './TimeTable.js';

class Details extends Component {
	state = {};
	componentDidMount() {
		console.log(this.props);
		let id = this.props.match.params.empid;
		let data = Data.find(x => x.empId === id);
		this.setState(data);
	}

	render() {
		return (
			<div className="detailsPage">
				{this.state.empId == null ? (
					<div className="center" style={{ marginTop: 100 }}>
						<div class="sk-folding-cube">
							<div class="sk-cube1 sk-cube"></div>
							<div class="sk-cube2 sk-cube"></div>
							<div class="sk-cube4 sk-cube"></div>
							<div class="sk-cube3 sk-cube"></div>
						</div>
						<p className="flow-text">Loading...</p>
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
