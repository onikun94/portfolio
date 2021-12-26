import React, { VFC } from 'react';
import Data from '@/data/Data.json';
import Work from './Work';

const Works: VFC = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl ">作品</h1>
      <div className="flex flex-wrap m-2 justify-center">
        {Data.workData.map((w) => (
          <Work key={w.id} {...w} />
        ))}
      </div>
    </>
  );
};

export default Works;
