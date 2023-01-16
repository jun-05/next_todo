import Head from 'next/head';
import React from 'react';
import UpdateTask from '../../../features/task/UpdateTask';

const Home = () => {
  return (
    <>
      <Head>
        <title>update Task</title>
      </Head>
      <UpdateTask />
    </>
  );
};

export default Home;
