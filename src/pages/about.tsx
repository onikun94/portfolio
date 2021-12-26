import Contacts from '@/components/about/Contacts';
import Layout from '@/components/Layout';
import { NextPage } from 'next';
import React from 'react';

const About: NextPage = () => {
  return (
    <Layout>
      <Contacts />
    </Layout>
  );
};

export default About;
