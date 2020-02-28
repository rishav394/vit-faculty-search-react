import React, { Component } from 'react';
import SearchFaculty from './SearchFaculty';
import Faculties from './Faculties';
import { connect } from 'react-redux';
import $ from 'jquery';

class Body extends Component {
	searchFaculty = faculty => {
		this.props.findAndSetFaculty(faculty);
	};

	componentDidMount() {
		$('.material-tooltip').remove();
	}

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
		findAndSetFaculty: faculty => {
			dispatch({
				type: 'FIND_FACULTY',
				faculty,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
