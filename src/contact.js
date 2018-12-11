import React from 'react';
import './contact.css';

export default function ContactForm(props) {
	return (
		<div className="contact">
			<form>
				<input type="text" id="name" name="name" placeholder="Your Name" />
				<input type="text" id="email" name="email" placeholder="Your Email" />
				<select id="subject" name="subject">
					<option value="performance">Book Me for a Fire Performance</option>
					<option value="props">Need Some Fire Props?</option>
					<option value="misc">Other</option>
				</select>
				<textarea
					type="text"
					id="message"
					name="message"
					placeholder="Some kind words?"
				/>
				<button>Send</button>
			</form>
		</div>
	);
}
