import React from 'react';

export default function ContactForm(props) {
	return (
		<div className="contact">
			<form>
				<input type="text" id="email" name="email" placeholder="Your Email" />
				<select id="subject" name="subject">
					<option value="performance">Performance</option>
					<option value="props">Fire Props</option>
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
