import React from 'react';
import tw from 'twin.macro';
import TaskCard from './TaskCard';
import NotFouncdTask from './NotFouncdTask';
import { useTaksList } from '../hooks/useTasks';
import { task } from '../../task/type/TaskType';
import Link from 'next/link';

const MainSection = () => {
  const { isLoading, data: result } = useTaksList();
  if (isLoading) return <div>loading...</div>;
  if (!result?.data) return <NotFouncdTask />;

  return (
    <MainSectionBlock>
      <div className="font-bold text-gray-400">INBOX</div>

      <div className="mt-5 md:mt-12 flex flex-col">
        {result.data.length ? (
          result.data?.map((task: task, idx: number) => (
            <Link href={`/task/update?id=${task._id}`} key={idx}>
              <TaskCard task={task} />
            </Link>
          ))
        ) : (
          <NotFouncdTask />
        )}
      </div>
    </MainSectionBlock>
  );
};
const MainSectionBlock = tw.div`w-full h-full p-8`;

export default MainSection;
