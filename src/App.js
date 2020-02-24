import React, { Component } from 'react';
import M from 'materialize-css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Details from './Components/Details';

class App extends Component {
	render() {
		M.AutoInit();
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<Route exact path='/' component={Body} />
					<Route path='/details/:empid' component={Details} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
