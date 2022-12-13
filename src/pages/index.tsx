import type { NextPage } from 'next';
import Head from 'next/head';
import tw from 'twin.macro';
import Auth from '../features/auth';

const Home: NextPage = () => {
  return <Auth />;
};

export default Home;
