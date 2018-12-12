import React from 'react';
import './footer.css';

export default function Footer() {
	return (
		<div className="footer">
			<div className="social">
				<h4>Stay Connected</h4>
				<i className="fab fa-facebook fa-3x" />
				<i className="fab fa-instagram fa-3x" />
				<i className="fab fa-twitter fa-3x" />
				<p>You can send me a message at [insert email]</p>
			</div>
			<div className="motto">
				<h4>Kenton Kenton</h4>
				<p>
					Things about lalalalalalala. Things on this. Things on that. Things
					about fire. Just things. And, then some more things.
				</p>
			</div>
			<div className="nav">
				<h4>Navigate</h4>
				<ul>
					<li>
						<a href="#fire">Fire!</a>
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
			<div className="made">
				Created by{' '}
				<a
					href="https://shellyleung.me"
					target="_blank"
					rel="noopener noreferrer"
				>
					Shelly Leung
				</a>
				.
			</div>
		</div>
	);
}
