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
	searchFaculty = (faculty) => {
		// Wrong implementation. Please fix
		var res = this.state.allFaculties.filter((fac) => {
			return (
				fac.cabin.includes(faculty.cabin) ||
				fac.name.includes(faculty.name) ||
				fac.email.includes(faculty.email) ||
				fac.mobile.includes(faculty.mobile) ||
				fac.designation.includes(faculty.designation)
			);
		});
		this.setState({
			faculties: res,
		});
		console.log(this.state);
	};

	render() {
		return (
			<div className='row section container flow-text'>
				<SearchFaculty searchFaculty={this.searchFaculty} />
				<Faculties faculties={this.state.faculties} />
			</div>
		);
	}
}

export default Body;
