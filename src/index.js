import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Demo from './component/Demo';
import About from './component/About';
import * as serviceWorker from './serviceWorker';


/**
 * 自己封装一个 router component
 * 只负责 注册路由 类似于 angularjs的 ng-view
 */
function RouterView(props) {
    return (
      <Switch>
        <Route path="/" exact component={Demo}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    );
  }

ReactDOM.render(<App view={RouterView}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
