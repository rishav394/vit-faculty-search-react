import React, { Component } from 'react';
import SearchFaculty from './SearchFaculty';
import Faculties from './Faculties';
import { connect } from 'react-redux';

class Body extends Component {
	searchFaculty = faculty => {
		// Wrong implementation. Please fix
		var res = this.props.allFaculties.filter(fac => {
			return (
				fac.empId === faculty.empid ||
				(fac.cabin.includes(faculty.cabin) && faculty.cabin.length > 0) ||
				(fac.name.includes(faculty.name) && faculty.name.length > 0) ||
				(fac.email.includes(faculty.email) && faculty.email.length > 0) ||
				(fac.mobile.includes(faculty.mobile) && faculty.mobile.length > 0) ||
				(fac.designation.includes(faculty.designation) &&
					faculty.designation.length > 0)
			);
		});

		this.props.setFaculty(res);
	};

	render() {
		return (
			<div className="row section container flow-text">
				<SearchFaculty searchFaculty={this.searchFaculty} />
				<Faculties faculties={this.props.faculties} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		allFaculties: state.allFaculties,
		faculties: state.faculties,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setFaculty: fac => {
			dispatch({
				type: 'SET_FACULTIES_RESULT',
				res: fac,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
