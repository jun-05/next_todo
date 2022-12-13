import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const Home = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <>
      <div>{session?.user.name}</div>
      <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>signOut</button>
    </>
  );
};

export default Home;
