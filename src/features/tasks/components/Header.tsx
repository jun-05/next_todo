import React, { useState } from 'react';
import tw from 'twin.macro';
import { HiMenuAlt1 } from 'react-icons/hi';
import styled from 'styled-components';
import { parseDateNow } from '../lib/parseDate';
import { useTaksList } from '../hooks/useTasks';
import { task } from '../../task/type/TaskType';

// To adjust Circle Percentage
const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Header = () => {
  const { data: result } = useTaksList();

  const progress =
    result?.data.length === 0
      ? 0
      : Math.round(
          (result?.data.filter((item: task) => item.done === true).length / result?.data.length) *
            100
        );

  return (
    <HeaderBlock>
      <TasksBg />
      <div className="relative flex text-white h-full">
        <div className="absolute top-0 right-0 w-2/5 h-full bg-gray-500 opacity-30" />
        <div className="flex flex-col w-3/5 p-5 justify-between">
          <div className="cursor-pointer text-2xl md:text-4xl w-fit">
            <HiMenuAlt1 />
          </div>
          <div className="text-3xl md:text-6xl text-left font-serif">
            Your <p> Things</p>
          </div>
          <div className="opacity-60">{parseDateNow()}</div>
        </div>
        <div className="relative flex items-center justify-center flex-grow z-10">
          <div className="flex space-x-4 md:space-x-10">
            <TasksCountTextBlock>
              {result?.data.filter((item: task) => item.taskType === 'Personal').length}
              <p>Personal</p>
            </TasksCountTextBlock>
            <TasksCountTextBlock>
              {result?.data.filter((item: task) => item.taskType === 'Business').length}
              <p>Business</p>
            </TasksCountTextBlock>
          </div>

          <div className="absolute flex bottom-2 md:bottom-10">
            <ProgressWrapper>
              <svg className="circle_progress" viewBox="0 0 120 120">
                <circle className="frame" cx="60" cy="60" r="54" strokeWidth="12" />
                <circle
                  className="bar"
                  cx="60"
                  cy="60"
                  r="54"
                  strokeWidth="12"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={CIRCUMFERENCE * (1 - progress * 0.01)}
                />
              </svg>
              <strong className="absolute top-0 left-0 right-0 bottom-0 leading-10 text-center text-[10px] font-thin ">
                {progress}%
              </strong>
            </ProgressWrapper>
          </div>
        </div>
      </div>
    </HeaderBlock>
  );
};
const HeaderBlock = tw.div`relative w-full h-[25vh] md:h-[420px] bg-gray-500`;

const TasksBg = styled.div`
  ${tw`
absolute 
bottom-0 left-0 right-0 top-0 
opacity-70
w-full
h-full
bg-cover
bg-no-repeat 
`};
  background-image: url('/assets/tasks_bg2.jpg');
  background-position: 0% 30%;
`;

const TasksCountTextBlock = styled.div`
  ${tw`
    text-xl
    md:text-3xl 
    text-center
    md:text-right
`}
  p {
    ${tw`text-sm md:text-base font-sans opacity-60`}
  }
`;

const ProgressWrapper = styled.div`
  ${tw`
relative
h-10
w-10
`}
  .circle_progress {
    transform: rotate(-90deg);
  }
  .frame,
  .bar {
    fill: none;
  }
  .frame {
    ${tw`stroke-slate-400`}
  }
  .bar {
    stroke: white;
    stroke-linecap: round;
  }
`;

export default Header;
