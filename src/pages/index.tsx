import Layout from '@/components/Layout';
import Card from '@/components/profile/Card';
import Careers from '@/components/profile/Careers';
import Works from '@/components/profile/Works';
import type { NextPage } from 'next';
import Data from '../data/Data.json';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto w-3/5">
        <Card profContents={Data.profData} />
        <Careers />
        <Works />
      </div>
    </Layout>
  );
};

export default Home;
