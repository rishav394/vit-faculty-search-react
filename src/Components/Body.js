import React, { Component } from 'react';
import SearchFaculty from './SearchFaculty';
import Faculties from './Faculties';
import Data from '../facultyall.json';

class Body extends Component {
	state = {
		allFaculties: [],
		faculties: [],
	};

	componentDidMount() {
		this.setState({
			allFaculties: Data,
		});
	}
	searchFaculty = faculty => {
		// Wrong implementation. Please fix
		var res = this.state.allFaculties.filter(fac => {
			return (
				// fac.empId === faculty.empid ||
				(fac.cabin.includes(faculty.cabin) && faculty.cabin.length > 0) ||
				(fac.name.includes(faculty.name) && faculty.name.length > 0) ||
				(fac.email.includes(faculty.email) && faculty.email.length > 0) ||
				(fac.mobile.includes(faculty.mobile) && faculty.mobile.length > 0) ||
				(fac.designation.includes(faculty.designation) &&
					faculty.designation.length > 0)
			);
		});
		this.setState({
			faculties: res,
		});
	};

	render() {
		return (
			<div className="row section container flow-text">
				<SearchFaculty searchFaculty={this.searchFaculty} />
				<Faculties faculties={this.state.faculties} />
			</div>
		);
	}
}

export default Body;
