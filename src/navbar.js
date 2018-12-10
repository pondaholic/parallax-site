import React from 'react';

import './navbar.css';

export default function Navbar(props) {
	return (
		<div className="navbar">
			<ul>
				<li>
					<a href="#fire">Fire!</a>
				</li>
				<li>
					<a href="#parallax-img2">Contact</a>
				</li>
				<li>
					<a href="#parallax-img">Props</a>
				</li>
				<li>
					<a href="#parallax-img">Something Else</a>
				</li>
				<li>
					<a href="#parallax-img">More Things</a>
				</li>
			</ul>
		</div>
	);
}
