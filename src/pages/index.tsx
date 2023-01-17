import type { NextPage } from 'next';
import Head from 'next/head';
import Auth from '../features/auth/Auth';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Auth />
    </>
  );
};

export default Home;
