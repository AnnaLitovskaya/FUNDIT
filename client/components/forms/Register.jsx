import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createUser } from '../../store/actions/userActions/createUser';
import {
  attemptLogin,
  authUser,
} from '../../store/actions/userActions/getCurUser';
import LinkPlaid from '../LinkPlaid';
import CreateCard from './CreateCard';
import JoinOrCreateFamily from './JoinOrCreateFamily';
// import SignUp from './SignUp';

const Register = (props) => {
  const [page, setPage] = useState(2);
  const [userStatus, setUserStatus] = useState('Anonymous');
  return (
    <div id="signup-wrapper">
      <div id="signupProgress">
        <span id={page === 1 ? 'signupOne' : 'signupTwo'} />
        <span id={page === 2 ? 'signupOne' : 'signupTwo'} />
      </div>
      {page === 1 ? (
        <JoinOrCreateFamily
          history={props.history}
          setPage={setPage}
          setUserStatus={setUserStatus}
        />
      ) : userStatus === 'Parent' ? (
        <LinkPlaid history={props.history} />
      ) : (
        <CreateCard history={props.history} />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    attemptLogin: () => dispatch(attemptLogin()),
  };
};

export default connect(null, mapDispatchToProps)(Register);
