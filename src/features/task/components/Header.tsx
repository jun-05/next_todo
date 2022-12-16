import React from 'react';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';

const Header = () => {
  const router = useRouter();
  const backPage = () => {
    router.back();
  };

  return (
    <HeaderBlock>
      <div className="text-white opacity-50 text-2xl md:text-3xl cursor-pointer" onClick={backPage}>
        <BsArrowLeft />
      </div>
      <div className="text-white text-2xl md:text-3xl">Add New Thing</div>
      <div></div>
    </HeaderBlock>
  );
};
const HeaderBlock = tw.div`flex justify-between items-center p-5 h-24`;

export default Header;
