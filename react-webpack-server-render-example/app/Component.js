const React = require('react');

let user = { 'name': 'John', 'city': 'San Francisco' };

class UserName extends React.Component {
  render() {
    return <div>
      name: {this.props.name}
      <button style={{ background: this.context.color }}>Button</button>
    </div>;
  }
}

class User extends React.Component {
  getChildContext() {
    return { color: "purple" };
  }
  render() {
    return <div>
      <h1>City: {this.props.user.city}</h1>
      <UserName name={this.props.user.name} />
    </div>;
  }
}

UserName.contextTypes = {
  color: React.PropTypes.string
}

UserName.propTypes = {
  name: React.PropTypes.string
}

User.childContextTypes = {
  color: React.PropTypes.string
}

module.exports = {
  User,
  UserName,
  user
}