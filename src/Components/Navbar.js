import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="navbar-fixed">
			<nav className="nav-wrapper indigo">
				<div className="brand-logo center container">
					<Link to="/" className="blue-text text-lighten-4 flow-text">
						VIT Faculty Search
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
