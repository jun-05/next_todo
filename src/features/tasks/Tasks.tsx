import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

const taskItem = [
  {
    iconName: 'GiPencilBrush',
    title: 'Learn NextJS, NodeJS, CSS',
    note: 'To Complete TasksAPP',
    place: 'my Home',
    dueTime: 'Dec 16, 9AM',
    urgent: 1,
  },
  {
    iconName: 'GiTie',
    title: 'Complete This APP',
    note: 'can i complete this APP?',
    place: 'my Home',
    dueTime: 'Dec 16, 9AM',
    urgent: 1,
  },
  {
    iconName: 'GiRunningShoe',
    title: 'Exercise',
    note: 'working Park',
    place: 'Park',
    dueTime: 'Dec 16, 9AM',
    urgent: 2,
  },
  {
    iconName: 'GiBookmarklet',
    title: 'Reading Book',
    note: 'Slowly...',
    place: 'my Home',
    dueTime: 'Dec 16, 9AM',
    urgent: 3,
  },
  {
    iconName: 'GiNotebook',
    title: 'Note Error Log',
    note: 'Error Collection..',
    place: 'company',
    dueTime: 'Dec 16, 9AM',
    urgent: 1,
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
