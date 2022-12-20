import React from 'react';

import { FastPayment, Graph, Overview } from '../components';

const MainSection = () => {
  return (
    <div>
      <Overview />
      <FastPayment />
      <Graph />
    </div>
  );
};

export default MainSection;
