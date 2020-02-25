import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Faculties extends Component {
	render() {
		var { faculties } = this.props;
		var count = 0;
		const FacultyList = faculties.slice(0, 15).map(faculty => {
			count++;
			return (
				<tr key={faculty.empId}>
					<td>{faculty.empId}</td>
					<td>{faculty.name}</td>
					<td>
						<Link to={'details/' + faculty.empId}>
							<i className="material-icons prefix">add</i>
						</Link>
					</td>
				</tr>
			);
		});
		return (
			<div className="col s12 l6 offset-l1">
				<table className="fa-border striped">
					<thead>
						<tr>
							<th data-field="id">Empid</th>
							<th data-field="name">Name</th>
							<th data-field="details">Details</th>
						</tr>
					</thead>
					<tbody>{FacultyList}</tbody>
				</table>
				<div className="grey-text">
					<h6>
						<i>
							Showing {count} of {faculties.length} results
						</i>
					</h6>
				</div>
			</div>
		);
	}
}

export default Faculties;
