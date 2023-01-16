import React from 'react';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';

import styles from '../styles/Form.module.css';
import styled from 'styled-components';
import { useToggle } from './../../common/hooks/useToggle';
import { useRecoilState } from 'recoil';
import taskItemState from '../recoil/taskRecoil';

const Header = ({ isUpdate = false, done = false }) => {
  const router = useRouter();
  const backPage = () => {
    router.back();
  };
  const [TaskItem, setTaskItem] = useRecoilState(taskItemState);
  const [toggle, setToggle] = useToggle(done);

  const handleToggle = () => {
    setToggle();
    setTaskItem(prev => ({ ...prev, done: !prev.done }));
  };

  return (
    <HeaderBlock className={styles.wrapper_width}>
      <div
        className="text-white opacity-50 text-2xl md:text-3xl cursor-pointer "
        onClick={backPage}
      >
        <BsArrowLeft />
      </div>
      <div className="text-white text-2xl md:text-3xl flex-shrink-0">
        {isUpdate ? 'Update Task' : 'Add New Think'}
      </div>
      {isUpdate ? (
        <div className="flex-col my-4 w-10">
          <div className="cursor-pointer rounded-ful relative">
            <ToggleInput
              type="checkbox"
              name="toggle"
              id="toggle"
              toggle={toggle}
              onClick={handleToggle}
            />
            <label
              htmlFor="toggle"
              className="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
            />
          </div>
          <div className="text-white">{done ? 'Done' : 'onGoing'}</div>
        </div>
      ) : (
        <div></div>
      )}
    </HeaderBlock>
  );
};
const HeaderBlock = tw.div`flex justify-between items-center  py-5 h-24`;

const ToggleInput = styled.input`
  ${({ toggle }: { toggle: boolean }) =>
    toggle ? tw`translate-x-6 bg-white ` : tw`translate-x-0 bg-blue-400 `};
  ${tw`
  focus:outline-none
  w-6
  h-6
  rounded-full
  absolute
  shadow-sm
  appearance-none
  cursor-pointer
  border
  top-0
  bottom-0
  m-auto
  ease-in-out
  duration-300
  transform`}
`;

export default Header;
