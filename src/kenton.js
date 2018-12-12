import React from 'react';
import { Element, animateScroll as scroller } from 'react-scroll';
import Navbar from './navbar';
import ContactForm from './contact';
import Footer from './footer';
import './kenton.css';

export default class Home extends React.Component {
	scrollTo() {
		scroller.scrollTo('scroll-to-element', {
			duration: 200,
			delay: 0,
			smooth: 'easeInOutQuart'
		});
	}
	render() {
		return (
			<div className="parallax">
				<Navbar />
				<div className="parallax-img" />
				<Element className="buffer" name="fire" id="fire" />
				<div className="scroll-text-bg">
					Scroll Up and Down this page to see the parallax scrolling effect.
					This div is just here to enable scrolling. Tip: Try to remove the
					background-attachment property to remove the scrolling effect.
				</div>
				<div className="parallax-img2" />
				<div className="caption-text">Let's Play with FIRE!</div>
				<Element className="buffer" name="props" id="props" />
				<div className="scroll-text-bg">fire props.</div>
				<div className="parallax-img3" />
				<div className="buffer" name="contact" id="contact" />
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
