import React from 'react';
import { signOut } from 'next-auth/react';
import Tasks from './../../features/tasks/Tasks';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Tasks</title>
      </Head>
      <Tasks />
    </>
  );
};

export default Home;
