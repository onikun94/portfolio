import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import Layout from '@/components/Layout';
import { getBlogData } from '@/api/getBlogData';
import { BlogType, TitleBlogType } from '@/types/BlogType';
import Title from '@/components/blog/Title';

type ContentsPageProps = {
  results: TitleBlogType[];
};

const Blog: NextPage<ContentsPageProps> = ({ results }) => {
  return (
    <Layout title="blog site">
      <Title results={results} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (contextId) => {
  const requestUrl = `http://localhost:8000/blog`;
  if (requestUrl) {
    const response = await getBlogData(requestUrl);
    return {
      props: { results: response },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Blog;
