import React, { Component } from 'react';
class SearchFaculty extends Component {
	state = {
		name: null,
		cabin: null,
		mobile: null,
		mail: null,
		designation: null,
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.searchFaculty(this.state);
	};

	render() {
		return (
			<div className='col s12 l5'>
				<form onSubmit={this.handleSubmit}>
					<div className='input-field'>
						<i className='material-icons prefix'>person_outline</i>
						<input
							onChange={this.handleChange}
							type='text'
							id='name'
							name='name'
							pattern='.{3,}'
							title='Should be atleast 3 letters'
						/>
						<label htmlFor='name'>By name</label>
					</div>
					<div className='input-field'>
						<i className='material-icons prefix'>mail_outline</i>
						<input
							onChange={this.handleChange}
							type='text'
							id='email'
							name='email'
							pattern='.{3,}'
							title='Should be atleast 3 letters'
						/>
						<label htmlFor='email'>By VIT email</label>
					</div>
					<div className='input-field'>
						<i className='material-icons prefix'>domain</i>
						<input
							onChange={this.handleChange}
							type='text'
							id='cabin'
							name='cabin'
							pattern='.{2,}'
							title='Should be atleast 2 letters'
						/>
						<label htmlFor='cabin'>By cabin number</label>
					</div>
					<div className='input-field'>
						<i className='material-icons prefix'>timeline</i>
						<input
							onChange={this.handleChange}
							type='text'
							id='designation'
							name='designation'
							pattern='.{7,}'
							title='Should be atleast 7 letters'
						/>
						<label htmlFor='designation'>By designation</label>
					</div>
					<div className='input-field'>
						<i className='material-icons prefix'>turned_in_not</i>
						<input
							onChange={this.handleChange}
							type='text'
							id='empid'
							name='empid'
							pattern='.{2,}'
							title='Should be atleast 2 letters'
						/>
						<label htmlFor='empid'>By Employee ID</label>
					</div>
					<div className='input-field center' id='search'>
						<button
							className='waves-effect waves-light btn light-blue darken-4'
							type='submit'
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
