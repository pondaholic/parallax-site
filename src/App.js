import React, { Component } from 'react';
import Home from './kenton';
import Navbar from './navbar';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				{/* <header className="App-header">A header navbar goes here.</header> */}
				<Home />
			</div>
		);
	}
}

export default App;
