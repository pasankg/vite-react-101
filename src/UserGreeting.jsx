import propTypes from 'prop-types';

function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h2>Welcome, {props.username}</h2>;
  } else {
    return <h2>Please Login</h2>;
  }
}

UserGreeting.propTypes = {
 isLoggedIn: propTypes.bool,
 username: propTypes.string
}

UserGreeting.defaultProps = {
 isLoggedIn: false,
 username: ''
}
export default UserGreeting;
