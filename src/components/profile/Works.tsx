import React, { VFC } from 'react';

import Work from './Work';

import Data from '@/data/Data.json';

const Works: VFC = () => {
  return (
    <div>
      <h1 className="mt-8 font-spartan text-center">Works</h1>
      <div>
        <div className="flex justify-center m-2">
          {Data.workData.map((w) => (
            <Work key={w.id} {...w} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
