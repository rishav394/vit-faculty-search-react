import React, { Component } from 'react';
class SearchFaculty extends Component {
	state = {
		name: '',
		cabin: '',
		mobile: '',
		email: '',
		designation: '',
		empId: '',
	};

	handleChange = e => {
		var upperArray = ['name', 'cabin', 'empId', 'mobile'];

		e.target.value = upperArray.includes(e.target.id)
			? e.target.value.toUpperCase()
			: e.target.value.toLowerCase();

		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.searchFaculty(this.state);
	};

	render() {
		return (
			<div className="col s12 l5">
				<form onSubmit={this.handleSubmit}>
					<div className="input-field">
						<i className="material-icons prefix">person_outline</i>
						<input
							onChange={this.handleChange}
							value={this.state.name}
							type="text"
							id="name"
							name="name"
						/>
						<label htmlFor="name">By name</label>
					</div>
					<div className="input-field">
						<i className="material-icons prefix">mail_outline</i>
						<input
							onChange={this.handleChange}
							value={this.state.email}
							type="text"
							id="email"
							name="email"
						/>
						<label htmlFor="email">By VIT email</label>
					</div>
					<div className="input-field">
						<i className="material-icons prefix">domain</i>
						<input
							onChange={this.handleChange}
							value={this.state.cabin}
							type="text"
							id="cabin"
							name="cabin"
						/>
						<label htmlFor="cabin">By cabin number</label>
					</div>
					<div className="input-field">
						<i className="material-icons prefix">timeline</i>
						<input
							onChange={this.handleChange}
							value={this.state.designation}
							type="text"
							id="designation"
							name="designation"
						/>
						<label htmlFor="designation">By designation</label>
					</div>
					<div className="input-field">
						<i className="material-icons prefix">turned_in_not</i>
						<input
							onChange={this.handleChange}
							value={this.state.empId}
							type="text"
							id="empId"
							name="empId"
						/>
						<label htmlFor="empId">By Employee ID</label>
					</div>
					<div className="input-field center" id="search">
						<button
							className="waves-effect waves-light btn light-blue darken-4"
							type="submit"
							onClick={this.handleSubmit}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchFaculty;
