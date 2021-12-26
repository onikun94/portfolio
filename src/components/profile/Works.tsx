import React, { VFC } from 'react';

import Work from './Work';

import Data from '@/data/Data.json';

const Works: VFC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">作品</h1>
      <div className="flex flex-wrap justify-center m-2">
        {Data.workData.map((w) => (
          <Work key={w.id} {...w} />
        ))}
      </div>
    </>
  );
};

export default Works;
