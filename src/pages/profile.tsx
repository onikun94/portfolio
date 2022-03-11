import { NextPage } from 'next';
import React from 'react';

import Layout from '@/components/Layout';
import Card from '@/components/profile/Card';
import Careers from '@/components/profile/Careers';
import Works from '@/components/profile/Works';

const Profile: NextPage = () => {
  return (
    <Layout title="onikun's profile">
      <Card
        content1="山口大陽"
        content2="Taiyo Yamaguchi"
        content3="出身：静岡県藤枝市"
        content4="生年月日:1999年6月22日"
        content5="趣味:麻雀"
      />
      <Careers />
      <Works />
    </Layout>
  );
};

export default Profile;
