import { NextPage } from 'next';
import React from 'react';

import Contacts from '@/components/about/Contacts';
import Layout from '@/components/Layout';

const About: NextPage = () => {
  return (
    <Layout title="about onikun">
      <Contacts />
    </Layout>
  );
};

export default About;
