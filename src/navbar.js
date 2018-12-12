import React from 'react';
import { Link } from 'react-scroll';

import './navbar.css';

export default function Navbar() {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="fire" smooth={true}>
						Fire!
					</Link>
				</li>
				<li>
					<Link to="props" smooth={true}>
						Props
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true}>
						Contact
					</Link>
				</li>
				<li>
					<Link to="parallax-img" smooth={true}>
						Something Else
					</Link>
				</li>
				<li>
					<Link to="parallax-img" smooth={true}>
						More Things
					</Link>
				</li>
			</ul>
		</div>
	);
}
