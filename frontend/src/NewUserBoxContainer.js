import NewUserBox from './NewUserBox';
import { connect } from 'react-redux';
import { createUser, loadUsers } from './actions';

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  loadUsers: () => dispatch(loadUsers())
});

export default connect(null, mapDispatchToProps)(NewUserBox);
