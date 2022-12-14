import React from 'react';
import tw from 'twin.macro';

import { GiPencilBrush, GiTie, GiRunningShoe, GiBookmarklet, GiNotebook } from 'react-icons/gi';
import { MdPlace, MdLabelImportant } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';
import { task } from '../Type/TasksType';
import { parseIcon } from '../lib/parseIcon';
import { parseUrgentColor } from './../lib/parseUrgentColor';

const TaskCard = ({ task }: { task: task }) => {
  const { iconName, title, note, place, dueTime, urgent } = task;

  return (
    <TaskCardBlock>
      <div className="h-10 min-w-[40px] md:h-16 md:min-w-[64px] flex justify-center items-center border-2 rounded-[50%] border-slate-200 text-lg md:text-3xl text-blue-400 hover:bg-slate-200">
        {parseIcon(iconName)}
      </div>
      <div className="flex flex-col flex-grow ml-4">
        <div className="text-base md:text-2xl font-bold whitespace-normal">{title}</div>
        <div className="hidden md:flex space-x-2 whitespace-normal text-xs md:text-base">
          <div className="flex items-center">
            <MdPlace />
            {place}
          </div>
          <div className="flex items-center">
            <TbNotes />
            {note}
          </div>
        </div>
      </div>
      <div className="text-xs md:text-base min-w-[105px] md:min-w-[139px]">
        <span className="text-red-400 font-bold">due : </span>
        <span className="text-black">{dueTime}</span>
        <div className="text-black flex items-center">
          <span className="font-bold">urgent : </span>
          <span className={`text-2xl mt-1 ml-2 text-${parseUrgentColor(urgent)}-400 `}>
            <MdLabelImportant />
          </span>
        </div>
      </div>
    </TaskCardBlock>
  );
};
const TaskCardBlock = tw.div`flex items-center md:items-stretch justify-between h-fit md:min-h-[80px] w-full border-b-2 border-gray-200 `;

export default TaskCard;
