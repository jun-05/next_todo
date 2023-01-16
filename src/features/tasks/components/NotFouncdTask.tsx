import React from 'react';
import tw from 'twin.macro';

const NotFouncdTask = () => {
  return <NotFouncdTaskBlock>Nothing To Task</NotFouncdTaskBlock>;
};
const NotFouncdTaskBlock = tw.div`flex justify-center text-3xl mt-4`;

export default NotFouncdTask;
