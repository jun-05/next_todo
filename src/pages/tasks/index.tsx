import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Tasks from './../../features/tasks/Tasks';

const Home = () => {
  const { data: session } = useSession();
  return (
    <>
      <Tasks />
      <button
        className="absolute top-0"
        onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
      >
        signOut
      </button>
    </>
  );
};

export default Home;
