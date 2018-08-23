import UserList from './UserList';
import { connect } from 'react-redux';
import { loadUsers } from './actions';

const mapStateToProps = ({ users, loaded }) => ({
  users,
  loaded
});

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers())
  // findClosest: (zip, responses) => dispatch(findClosest(zip, responses)),
  // showAllDogs: () => dispatch(showAllDogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
