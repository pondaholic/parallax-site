import React from 'react';
import ContactForm from './contact';
import Footer from './footer';
import './kenton.css';

export default class Home extends React.Component {
	render() {
		return (
			<div className="parallax">
				<div className="parallax-img" />
				<div className="buffer" id="fire" />
				<div className="scroll-text-bg">
					Scroll Up and Down this page to see the parallax scrolling effect.
					This div is just here to enable scrolling. Tip: Try to remove the
					background-attachment property to remove the scrolling effect.
				</div>
				<div className="parallax-img2" />
				<div className="caption-text">Let's Play with FIRE!</div>
				<div className="buffer" id="props" />
				<div className="scroll-text-bg">fire props.</div>
				<div className="parallax-img3" />
				<div className="buffer" id="contact" />
				<div className="scroll-text-bg">
					A contact form.
					<ContactForm />
				</div>
				<div className="buffer" id="etc" />
				<div className="parallax-img4" />
				<Footer />
			</div>
		);
	}
}
