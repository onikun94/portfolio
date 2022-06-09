import { useEffect, useState } from 'react';

import Data from '../data/Data.json';

import type { NextPage } from 'next';

import Card from '@/components/profile/Card';
import Careers from '@/components/profile/Careers';
import Works from '@/components/profile/Works';

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto w-3/5">
        <Card profContents={Data.profData} />
        <Careers />
        <Works />
      </div>
    </>
  );
};

export default Home;
