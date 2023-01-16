import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

const Tasks = () => {
  return (
    <div className="relative m-auto w-full lg:max-w-[1280px] min-h-screen h-fit xl:border-l xl:border-r">
      <Header />
      <Button />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Tasks;
