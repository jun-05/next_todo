import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import Header from './components/Header';
import IconSection from './components/IconSection';
import AddFormSection from './components/AddFormSection';
import taskItemState from './recoil/taskRecoil';
import { useRecoilState } from 'recoil';

const AddTask = () => {
  const [_, setTaskItem] = useRecoilState(taskItemState);
  useEffect(() => {
    setTaskItem(prev => ({ ...prev, showIconList: false }));
  }, [setTaskItem]);

  return (
    <AddTaskBlock>
      <Header />
      <IconSection />
      <AddFormSection />
    </AddTaskBlock>
  );
};
const AddTaskBlock = tw.div`relative w-full min-h-screen h-fit bg-sky-500`;

export default AddTask;
