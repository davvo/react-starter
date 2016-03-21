import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import './main.css'

class App extends React.Component {
	render() {
		return (
			<h1>Hello</h1>
		)
	}
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.querySelector('#root'))