import Layout from '@/components/Layout';
import Career from '@/components/profile/Career';
import Careers from '@/components/profile/Careers';
import Works from '@/components/profile/Works';
import { NextPage } from 'next';
import React from 'react';

const Profile: NextPage = () => {
  return (
    <Layout>
      <Careers />
      <Works />
    </Layout>
  );
};

export default Profile;
