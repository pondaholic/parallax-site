import React from 'react';
import { Link } from 'react-scroll';

import './navbar.css';

export default function Navbar(props) {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="#fire" smooth={true} duration={500}>
						Fire!
					</Link>
				</li>
				<li>
					<a href="#props">Props</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
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
