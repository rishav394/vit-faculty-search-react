import React, { Component } from 'react';
import Panel from './Panel';
import '../loading.css';
import '../detailsStyle.css';
import TimeTable from './TimeTable.js';
import { connect } from 'react-redux';

class Details extends Component {
	render() {
		return (
			<div className="detailsPage">
				{this.props.details === undefined ||
				this.props.details.empId == null ? (
					<div className="center" style={{ marginTop: 100 }}>
						<div className="sk-folding-cube">
							<div className="sk-cube1 sk-cube"></div>
							<div className="sk-cube2 sk-cube"></div>
							<div className="sk-cube4 sk-cube"></div>
							<div className="sk-cube3 sk-cube"></div>
						</div>
						<p className="flow-text">Loading...</p>
					</div>
				) : (
					<div>
						<Panel tab={this.props.details} />
						<TimeTable www={this.props.details.whenwherewhat} />
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.empid;
	let data = state.allFaculties.find(x => x.empId === id);

	return {
		details: data,
	};
};

export default connect(mapStateToProps)(Details);
