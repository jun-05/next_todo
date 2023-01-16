import React from 'react';
import tw from 'twin.macro';
import { task } from '../../task/type/TaskType';
import { useTaksList } from '../hooks/useTasks';

const Footer = () => {
  const { data: result } = useTaksList();

  return (
    <FooterBlock>
      COMPLETED
      <span className="inline-block h-5 w-5 rounded-full bg-slate-500 text-center leading-5 text-sm text-white ml-2 md:mt-1">
        {result?.data.filter((item: task) => item.done === true).length}
      </span>
    </FooterBlock>
  );
};
const FooterBlock = tw.div`absolute flex items-center bottom-2 left-5 md:text-2xl text-gray-500 font-bold`;

export default Footer;
