import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App(props) {
  console.log(props)
  const { view: ReactView } = props;
  return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
          </header>
          <nav className="App-left-nav">
            <ul>
              <li><Link to="/">Go To Demo</Link></li>
              <li><Link to="/about">Go To About</Link></li>
            </ul>
          </nav>
          <content className="App-content">
            <ReactView></ReactView>
          </content>
        </div>
    </BrowserRouter>
  );
}

export default App;
