const React = require('react');
const user = require('./Component.js').user;
const User = require('./Component.js').User;
const PropTypes = require('prop-types'); 

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: this.props.initialCount };
	}

	tick() {
		this.setState((prevState) => ({
			count: prevState.count + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				{this.state.count <= 20 ? <span>the count is: </span> : ""}
				<span>{this.state.count}</span>
				<User user={user} />
			</div>
		);
	}
}

App.propTypes={
	// initialCount: React.PropTypes.string.isRequired
	initialCount: PropTypes.string.isRequired
}

module.exports = App;