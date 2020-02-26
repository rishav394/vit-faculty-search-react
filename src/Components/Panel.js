import React from 'react';

const Panel = ({ tab }) => {
	return (
		<div className="section flow-text">
			<table className="responsive-table center table stripped">
				<thead>
					<tr>
						<th data-field="empId">Empid</th>
						<th data-field="name">Name</th>
						<th data-field="intercom">Intercom</th>
						<th data-field="mobile">Mobile no</th>
						<th data-field="email">Email</th>
						<th data-field="school">School</th>
						<th data-field="cabin">Cabin</th>
						<th data-field="designation">Designation</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{tab.empId}</td>
						<td>{tab.name}</td>
						<td>{tab.intercom}</td>
						<td>
							<a href={'tel:' + tab.mobile}>{tab.mobile}</a>
						</td>
						<td>
							<a href={'mailto:' + tab.email}>{tab.email}</a>
						</td>
						<td>{tab.school}</td>
						<td>{tab.cabin}</td>
						<td>{tab.designation}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Panel;
