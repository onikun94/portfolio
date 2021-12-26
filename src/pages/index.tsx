import Intro from '@/components/home/Intro';
import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <Intro />
    </Layout>
  );
};

export default Home;
