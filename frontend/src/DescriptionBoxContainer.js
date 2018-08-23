import DescriptionBox from './DescriptionBox';
import { connect } from 'react-redux';
import { updateUser } from './actions';

const mapDispatchToProps = (dispatch) => ({
  // fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (id, newData) => dispatch(updateUser(id, newData))
});

export default connect(null, mapDispatchToProps)(DescriptionBox);
