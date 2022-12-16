import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import Header from './components/Header';
import IconSection from './components/IconSection';
import FormSection from './components/FormSection';
import taskItemState from './recoil/taskRecoil';
import { useRecoilState } from 'recoil';

//TODOS
//validate 만들기 (require로만 할까?)
//mongoDB에 넣기. uid,id 같이 넣어야..
//ReactQuery 사용해서 넣기, 가져오기. 전역값. SSG로 해도 될듯?
//mongoDB에서 가져오기
//수정하기 -> 값 가져올때 단일값 가져오는 API를 SSR로 가져오고, 수정은 mutate?

const AddTask = () => {
  const [_, setTaskItem] = useRecoilState(taskItemState);

  useEffect(() => {
    setTaskItem(prev => ({ ...prev, showIconList: false }));
  }, [setTaskItem]);

  // const [iconName, showIcon, setShowIcon, changeIcon] = useIconChange();

  return (
    <AddTaskBlock>
      <Header />
      <IconSection />
      <FormSection />
    </AddTaskBlock>
  );
};
const AddTaskBlock = tw.div`relative w-full min-h-screen h-fit bg-sky-600`;

export default AddTask;
