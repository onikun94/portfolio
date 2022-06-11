import { useRecoilValue } from 'recoil';

import Data from '../data/Data.json';

import type { NextPage } from 'next';

import { responsiveState } from '@/atoms/responsive';
import Card from '@/components/profile/Card';
import Careers from '@/components/profile/Careers';
import Works from '@/components/profile/Works';

const Home: NextPage = () => {
  const width = useRecoilValue(responsiveState);
  return (
    <>
      {width >= 630 ? (
        <div className="mx-auto w-3/5">
          <Card profContents={Data.profData} />
          <Careers />
          <Works />
        </div>
      ) : (
        <div>
          <Card profContents={Data.profData} />
          <Careers />
          <Works />
        </div>
      )}
    </>
  );
};

export default Home;
