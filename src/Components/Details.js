import React, { Component } from 'react';
import Panel from './Panel';
import '../loading.scss';
import '../detailsStyle.css';
import TimeTable from './TimeTable.js';
import { connect } from 'react-redux';

class Details extends Component {
	render() {
		return (
			<div className="detailsPage">
				{this.props.details === undefined ||
				this.props.details.empId == null ? (
					<div>
						<div id="notfound">
							<div className="notfound">
								<div className="notfound-404">
									<div></div>
									<h1>404</h1>
								</div>
								<h2>Page not found</h2>
								<p>
									The page you are looking for might have been removed had its
									name changed or is temporarily unavailable.
								</p>
							</div>
						</div>
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
