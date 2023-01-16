import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-full h-full md:w-3/5 md:h-3/4 grid md:grid-cols-2">
        <div className="hidden md:block sm:relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-md">
          <CartoonBg></CartoonBg>
          <CloundBg></CloundBg>
          <CloundBgTwo></CloundBgTwo>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

const CartoonBg = styled.div`
  ${tw`
absolute 
bottom-0 left-0 right-0 top-0
w-full
h-full
z-[1]
bg-cover
bg-no-repeat
`};
  background-image: url('/assets/img2.png');
  background-position: 60% 100px;
`;

const CloudOne = keyframes`
  0%{
    transform: translateX(360%);
  }100%{
    transform: translateX(-250%);
  }
`;

const CloudTwo = keyframes`
  0%{
    transform: translateX(200%);
  }100%{
    transform: translateX(-270%);
  }
`;
const CloundBg = styled.div`
  ${tw`
absolute 
top-[65%]
left-[10%]
w-[180px]
h-[180px]
z-[2]
bg-contain
bg-no-repeat
translate-x-[250%]
`};
  background-image: url('/assets/cloud_1.png');
  animation: ${CloudOne} 15s ease-in infinite;
`;

const CloundBgTwo = styled.div`
  ${tw`
absolute 
top-[49%]
left-[50%]
w-[200px]
h-[200px]
z-0
bg-contain
bg-no-repeat
translate-x-[290%]
`};
  background-image: url('/assets/cloud_2.png');
  animation: ${CloudTwo} 10s ease-in infinite;
`;
