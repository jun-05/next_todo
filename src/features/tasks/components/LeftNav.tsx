import React from 'react';
import tw from 'twin.macro';
import { AiOutlineMenuFold, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';

import { useRecoilState } from 'recoil';
import navItemState from '../recoil/NavRecoil';
import { signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';

const LeftNav = () => {
  const onClickNavMenu = () => {
    setNavItem(prev => ({ ...prev, showNav: !prev.showNav }));
  };

  const { data: session } = useSession();

  const [navItem, setNavItem] = useRecoilState(navItemState);
  const { showNav } = navItem;

  return (
    <LeftNavBlock showNav={showNav}>
      <div
        className="absolute top-4 right-4 cursor-pointer text-2xl md:text-4xl w-fit"
        onClick={onClickNavMenu}
      >
        <AiOutlineMenuFold />
      </div>
      <div className="flex flex-col h-28 md:h-40 mx-5 p-4 border-b-2">
        <div className="text-2xl md:text-4xl">
          <AiOutlineUser />
        </div>

        <div className="text-xl md:text-2xl">{session?.user.name}</div>
      </div>
      <div
        className="flex items-center space-x-2 text-xl md:text-2xl p-4"
        onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
      >
        <AiOutlineLogout />
        <span>Sign Out</span>
      </div>
    </LeftNavBlock>
  );
};
const LeftNavBlock = styled.div`
  ${({ showNav }: { showNav: boolean }) =>
    showNav ? tw`translate-x-0 z-50` : tw` -translate-x-full opacity-0 -z-50`};
  ${tw`
absolute 
flex 
flex-col 
w-full 
md:w-96 
h-full 
bg-gray-50 

ease-in-out
duration-1000
transform`}
`;

export default LeftNav;
