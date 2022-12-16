import React from 'react';
import { useRecoilState } from 'recoil';
import tw from 'twin.macro';
import { parseIcon } from '../../common/lib/parseIcon';
import { useIconChange } from '../hooks/useIconChange';
import taskItemState from '../recoil/taskRecoil';
import IconItem from './IconItem';

const iconArr = [
  'GiPencilBrush',
  'GiTie',
  'GiRunningShoe',
  'GiBookmarklet',
  'GiNotebook',
  'GiCookingPot',
];

const IconSection = () => {
  const [taskItem, setTaskItem] = useRecoilState(taskItemState);
  const { iconName, showIconList } = taskItem;

  const onClickIcon = () => {
    setTaskItem(prev => ({
      ...prev,
      showIconList: !prev.showIconList,
    }));
  };

  const animationOption = `${
    showIconList ? 'translate-y-10 opacity-100 z-10 ' : 'translate-y-0 opacity-0 -z-10 '
  } transform ease-linear duration-300 `;

  return (
    <IconSectionBlock>
      <div
        className=" z-10 h-16 w-16 md:h-20 md:w-20 flex justify-center items-center border-2 rounded-full border-slate-200 text-lg md:text-3xl text-white hover:bg-sky-600 cursor-pointer"
        onClick={onClickIcon}
      >
        {parseIcon(iconName)}
      </div>
      <div
        className={`${animationOption} absolute top-10 grid md:flex grid-cols-3 gap-3 md:justify-center md:flex-wrap md:space-x-2 w-fit `}
      >
        {iconArr.map((iconName, idx) => (
          <IconItem iconName={iconName} key={idx} />
        ))}
      </div>
    </IconSectionBlock>
  );
};

const IconSectionBlock = tw.div`relative flex flex-col items-center justify-center w-full mt-5 md:mt-10`;

export default IconSection;
