import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import Header from './components/Header';
import IconSection from './components/IconSection';
import taskItemState from './recoil/taskRecoil';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { useGetTask } from './hooks/useTask';
import UpdateFormSection from './components/UpdateFormSection';

const UpdateTask = () => {
  const router = useRouter();
  const _id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id || '';
  const { isLoading, data: result } = useGetTask(_id);
  const [taskItem, setTaskItem] = useRecoilState(taskItemState);

  useEffect(() => {
    if (result === undefined) return;
    setTaskItem({
      done: result?.done!,
      iconName: result?.iconName,
      showIconList: false,
    });
  }, [result, setTaskItem]);

  if (isLoading) return <div> loading...</div>;

  return (
    <UpdateTaskBlock className={taskItem.done ? 'bg-stone-500' : 'bg-sky-500'}>
      <Header isUpdate={true} done={result?.done} />
      <IconSection />
      <UpdateFormSection task={result!} />
    </UpdateTaskBlock>
  );
};

const UpdateTaskBlock = tw.div`relative w-full min-h-screen h-fit ease-in-out duration-300 transform`;

export default UpdateTask;
