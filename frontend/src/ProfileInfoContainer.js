import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';
import { updateUser, loadUsers } from './actions';

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, newData) => dispatch(updateUser(id, newData)),
  loadUsers: () => dispatch(loadUsers())
});

export default connect(null, mapDispatchToProps)(ProfileInfo);
