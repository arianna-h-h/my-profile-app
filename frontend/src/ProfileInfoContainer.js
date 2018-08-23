import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';
import { updateUser } from './actions';

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, newData) => dispatch(updateUser(id, newData))
});

export default connect(null, mapDispatchToProps)(ProfileInfo);
