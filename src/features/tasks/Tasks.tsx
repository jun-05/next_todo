import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

const taskItem = [
  {
    id: 1,
    iconName: 'GiPencilBrush',
    taskType: 'business',
    title: 'Learn NextJS, NodeJS, CSS',
    note: 'To Complete TasksAPP',
    place: 'my Home',
    dueTime: 'Dec 16, 9AM',
    urgent: 1,
    done: false,
  },
  {
    id: 2,
    iconName: 'GiTie',
    taskType: 'business',
    title: 'Complete This APP',
    note: 'can i complete this APP?',
    place: 'my Home',
    dueTime: 'Dec 16, 9AM',
    urgent: 1,
    done: false,
  },
  {
    id: 3,
    iconName: 'GiRunningShoe',
    taskType: 'business',
    title: 'Exercise',
    note: 'working Park',
    place: 'Park',
    dueTime: 'Dec 16, 9AM',
    urgent: 2,
    done: false,
  },
  {
    id: 4,
    iconName: 'GiBookmarklet',
    taskType: 'business',
    title: 'Reading Book',
    note: 'Slowly...',
    place: 'my Home',
    dueTime: 'Dec 16, 9AM',
    urgent: 3,
    done: false,
  },
  {
    id: 5,
    iconName: 'GiNotebook',
    taskType: 'business',
    title: 'Note Error Log',
    note: 'Error Collection..',
    place: 'company',
    dueTime: 'Dec 16, 9AM',
    urgent: 1,
    done: false,
  },
];

const Tasks = () => {
  return (
    <div className="relative w-full min-h-screen h-fit">
      <Header />
      <Button />
      <MainSection tasks={taskItem} />
      <Footer />
    </div>
  );
};

export default Tasks;
