
import type { NextPage } from 'next';

import Intro from '@/components/home/Intro';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Intro />
    </Layout>
  );
};

export default Home;
