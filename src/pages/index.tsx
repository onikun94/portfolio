import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import Card from '@/components/profile/Card';
import Careers from '@/components/profile/Careers';
import Works from '@/components/profile/Works';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto w-3/5">
        <Card
          content1="山口大陽"
          content2="Taiyo Yamaguchi"
          content3="出身：静岡県藤枝市"
          content4="生年月日:1999年6月22日"
          content5="趣味:麻雀"
        />
        <Careers />
        <Works />
      </div>
    </Layout>
  );
};

export default Home;
