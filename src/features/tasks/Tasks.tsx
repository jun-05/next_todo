import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import LeftNav from './components/LeftNav';

const Tasks = () => {
  return (
    <div className="relative overflow-hidden m-auto w-full lg:max-w-[1280px] min-h-screen h-fit xl:border-l xl:border-r">
      <LeftNav />
      <Header />
      <Button />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Tasks;
