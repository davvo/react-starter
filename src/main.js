import React from 'react'
import { render } from 'react-dom'

require('./main.css');

class App extends React.Component {
	render() {
		return (
			<h1>Hello</h1>
		)
	}
}

render(<App />, document.querySelector('#content'))