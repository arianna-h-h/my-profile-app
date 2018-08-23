import UserList from './UserList';
import { connect } from 'react-redux';
import { loadUsers } from './actions';

const mapStateToProps = ({ users, loaded }) => ({
  users,
  loaded
});

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
