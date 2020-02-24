import React, { Component } from 'react';
import M from 'materialize-css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
class App extends Component {
	render() {
		M.AutoInit();
		return (
			<div className='App'>
				<Navbar />
				<Body />
			</div>
		);
	}
}

export default App;
