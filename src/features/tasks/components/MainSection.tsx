import React from 'react';
import tw from 'twin.macro';
import { task } from '../Type/TasksType';
import TaskCard from './TaskCard';

const MainSection = ({ tasks }: { tasks: task[] }) => {
  return (
    <MainSectionBlock>
      <div className="font-bold text-gray-400">INBOX</div>
      <div className="mt-5 md:mt-12 flex flex-col space-y-5">
        {tasks.map((task, idx) => (
          <TaskCard task={task} key={idx} />
        ))}
      </div>
    </MainSectionBlock>
  );
};
const MainSectionBlock = tw.div`w-full h-full p-8`;

export default MainSection;
