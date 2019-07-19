import React from 'react';
import logo from '../logo.svg';
import './Demo.css';

function About() {
  return (
    <div className="App About">
      <header className="Demo-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Page
        </a>
      </header>
    </div>
  );
}

export default About;
