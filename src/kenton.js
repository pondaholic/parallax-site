import React from 'react';
import './kenton.css';

export default class Home extends React.Component {
	render() {
		return (
			<div className="parallax">
				<div className="parallax-img" />
				<div className="scroll-text">
					Scroll Up and Down this page to see the parallax scrolling effect.
					This div is just here to enable scrolling. Tip: Try to remove the
					background-attachment property to remove the scrolling effect.
				</div>
				<div className="parallax-img2" />
				<div className="caption-text">Let's Play with FIRE!</div>
				<div className="parallax-img3" />
				<div className="scroll-text">More text about kenton.</div>
			</div>
		);
	}
}
