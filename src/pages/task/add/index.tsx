import Head from 'next/head';
import React from 'react';
import AddTask from './../../../features/task/AddTask';

const Home = () => {
  return (
    <>
      <Head>
        <title>Add Task</title>
      </Head>
      <AddTask />
    </>
  );
};

export default Home;
