import React from 'react';

import {
  TopNavBar,
  MainSection,
  SideBar,
  Footer,
  RightArticle,
} from '../sections';

const page = () => {
  return (
    <div className="bg-primary-white dark:bg-secondary-black overflow-hidden min-h-screen">
      <TopNavBar />
      {/* <SideBar />
      <MainSection />
      <RightArticle />
      <Footer /> */}
    </div>
  );
};

export default page;
