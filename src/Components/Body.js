import React, { Component } from 'react';
import SearchFaculty from './SearchFaculty';
import Faculties from './Faculties';

class Body extends Component {
	state = {
		allFaculties: [
			{
				empId: '15278',
				name: 'AABID HUSSAIN SHAIK',
				intercom: '2537',
				mobile: '9434346497',
				email: 'aabidhussain.s@vit.ac.in',
				school: 'School of Chemical Engineering',
				cabin: 'SJT-612-A09',
				img: '',
				designation: 'Assistant Professor (Senior)',
			},
			{
				empId: 'T0048',
				name: 'AARADHANA DESHMUKH',
				intercom: '0',
				mobile: '0',
				email: 'T0048@vit.ac.in',
				school: 'Institute for Industry and International Programme',
				cabin: '-',
				img: '',
				designation: 'Visiting Faculty',
			},
			{
				empId: '11976',
				name: 'AARTHI G',
				intercom: '2436',
				mobile: '9003043086',
				email: 'aarthi.g@vit.ac.in',
				school: 'School of Electronics Engineering',
				cabin: 'TT-132-13A',
				img: '',
				designation: 'Assistant Professor (Selection Grade)',
			},
			{
				empId: '13432',
				name: 'AARTHY M',
				intercom: '2740',
				mobile: '9952501667',
				email: 'aarthy.m@vit.ac.in',
				school: 'School of Electronics Engineering',
				cabin: 'TTANX-204-C',
				img: '',
				designation: 'Assistant Professor',
			},
			{
				empId: '12466',
				name: 'AARTHY S.L',
				intercom: '2829',
				mobile: '9600033077',
				email: 'aarthy.sl@vit.ac.in',
				school: 'School of Information Technology and Engineering',
				cabin: 'SJT-511-A05',
				img: '',
				designation: 'Assistant Professor (Senior)',
			},
		],
		faculties: [],
	};
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
