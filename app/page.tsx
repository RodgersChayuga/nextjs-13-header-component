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
    <div>
      <TopNavBar />
      <SideBar />
      <MainSection />
      <RightArticle />
      <Footer />
    </div>
  );
};

export default page;
