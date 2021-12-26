import { NextPage } from 'next';
import React from 'react';

import Layout from '@/components/Layout';
import Careers from '@/components/profile/Careers';
import Works from '@/components/profile/Works';

const Profile: NextPage = () => {
  return (
    <Layout>
      <Careers />
      <Works />
    </Layout>
  );
};

export default Profile;
