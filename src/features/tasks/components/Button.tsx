import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AiOutlinePlus } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Button = () => {
  const router = useRouter();

  return (
    <CreateButton onClick={() => router.push('/tasks/add')}>
      <AiOutlinePlus />
    </CreateButton>
  );
};

const CreateButton = styled.button`
  ${tw`
  absolute flex h-14 w-14 rounded-full bg-blue-400  items-center justify-center text-3xl text-white font-bold
  md:top-[436px] md:right-10
  bottom-5 right-5
  shadow-md
  `}
`;

export default Button;
