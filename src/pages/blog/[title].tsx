import { BlogType } from '@/types/BlogType';
import React, { VFC } from 'react';
import { marked } from 'marked';
import { GetServerSideProps } from 'next';
import { getBlogData } from '@/api/getBlogData';
import Layout from '@/components/Layout';

type ContentsPageProps = {
  results: BlogType;
};

const Contents: VFC<ContentsPageProps> = ({ results }) => {
  console.log('results = ', results);
  return (
    <Layout>
      <div className="m-8">
        <p className="text-background-dark">{results.updated_at}</p>
        <h1>{results.title}</h1>
        <br />
        <div dangerouslySetInnerHTML={{ __html: marked(`${results.contents}`) }}></div>
        <br />
        <br />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (contextId) => {
  console.log('id = ', contextId.query.title);
  const title = contextId.query.title;
  const requestUrl = `http://onikunblog.herokuapp.com/blog/${title}`;
  if (requestUrl) {
    const response = await getBlogData(requestUrl);
    console.log('resres = ', response);
    return {
      props: { results: response },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Contents;
