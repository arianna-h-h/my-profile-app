import ProfileImage from '../components/ProfileImage';
import { connect } from 'react-redux';
import { updateUser, loadUsers } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
  updateUser: (id, newData) => dispatch(updateUser(id, newData))
});

export default connect(null, mapDispatchToProps)(ProfileImage);
