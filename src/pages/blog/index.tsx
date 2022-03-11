import { GetStaticProps, NextPage } from 'next';
import React from 'react';

import { getBlogData } from '@/api/getBlogData';
import Title from '@/components/blog/Title';
import Layout from '@/components/Layout';
import { TitleBlogType } from '@/types/BlogType';

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

export const getStaticProps: GetStaticProps = async () => {
  const requestUrl = `http://onikunblog.herokuapp.com/blog`;
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
