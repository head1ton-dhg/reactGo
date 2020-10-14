import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replace } from 'connected-react-router';

import Page from './Page';
import LoginOrRegisterContainer from '../containers/LoginOrRegister';

const LoginOrRegister = (props) => {
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  /*
   * Redirect to '/' if is already logged in.
   */
  useEffect(() => {
    if (authenticated) {
      dispatch(replace({ pathname: '/' }));
    }
  }, []);

  const pageTitle = () => {
    return 'LoginOrRegister | reactGo';
  };

  const pageMeta = () => {
    return [
      { name: 'description', content: 'A reactGo example of a login or register page' },
    ];
  };

  const pageLink = () => {
    return [];
  };

  const getMetaData = () => ({
    title: pageTitle(),
    meta: pageMeta(),
    link: pageLink(),
  });

  return (
    <Page {...getMetaData()}>
      <LoginOrRegisterContainer {...props} />
    </Page>
  );
};

export default LoginOrRegister;