import React from 'react';
import { useRecoilState } from 'recoil';
import tw from 'twin.macro';
import { parseIcon } from '../../common/lib/parseIcon';
import taskItemState from '../recoil/taskRecoil';

const IconItem = ({ iconName }: { iconName: string }) => {
  const [_, setTaskItem] = useRecoilState(taskItemState);

  const onClickIcon = () => {
    setTaskItem(prev => ({
      ...prev,
      iconName: iconName,
      showIconList: !prev.showIconList,
    }));
  };

  return <IconItemBlock onClick={onClickIcon}>{parseIcon(iconName)}</IconItemBlock>;
};
const IconItemBlock = tw.div`h-16 w-16 md:h-20 md:w-20 flex justify-center items-center border-2 rounded-full border-slate-200 text-lg md:text-3xl text-white hover:bg-sky-700 cursor-pointer`;

export default IconItem;
