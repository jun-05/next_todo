import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';

const Auth = () => {
  const [isLoginPage, PageChange] = useToggle(true);

  return (
    <Layout>
      {isLoginPage ? <Login toggle={PageChange} /> : <Register toggle={PageChange} />}
    </Layout>
  );
};

export default Auth;
