import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import Header from './components/Header';
import IconSection from './components/IconSection';
import FormSection from './components/FormSection';
import taskItemState from './recoil/taskRecoil';
import { useRecoilState } from 'recoil';

//TODOS

//mongoDB에 넣기. uid 같이 넣어야..
//API/task.add 로 요청. mutate 사용? 이게 맞는거 같은데. 로딩때문에.. -> 훅으로 관리?
//uid값 넣기

// mongoDB에서 가져오기
// noTasks 컴포넌트 및 Loading 컴포넌트 추가
// ReactQuery 사용해서 넣기, 가져오기. 전역값. SSG로 해도 될듯?

// 클릭시 수정하기로 이동 -> 값 가져올때 단일값 가져오는 API를 SSR?로 가져오고, 수정은 mutate?

// Menu버튼 클릭시 사이드바 나타나도록 구현 /
// Personal 및 Business 옵션 선택할 수 있도록 설정. / Complete는 Form에서 처리하는게 좋을듯?
// SignOut 버튼 추가
// 회원가입시 이미지 추가할 수 있게 구현하기 및 Menu버튼에서 이미지 볼 수 있도록 하기.

//권한 없는 사용자 url막기. ( 로그인한 유저는 api/auth 막고. / task.add 및 task.Register 수정할것.)
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
