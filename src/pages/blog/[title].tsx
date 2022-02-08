import { marked } from 'marked';
import { GetServerSideProps } from 'next';
import React, { VFC } from 'react';

import { getBlogData } from '@/api/getBlogData';
import Layout from '@/components/Layout';
import { BlogType } from '@/types/BlogType';

type ContentsPageProps = {
  results: BlogType;
};

const Contents: VFC<ContentsPageProps> = ({ results }) => {
  return (
    <Layout>
      <div className="m-8">
        <p className="text-background-dark">{results.updated_at}</p>
        <h1>{results.title}</h1>
        <br />
        {results.contents ? (
          <div dangerouslySetInnerHTML={{ __html: marked(`${results.contents}`) }}></div>
        ) : (
          <></>
        )}
        <br />
        <br />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (contextId) => {
  const title = contextId.query.title;
  let requestUrl;
  if (typeof title === 'string') {
    requestUrl = `http://onikunblog.herokuapp.com/blog/${title}`;
  }
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

export default Contents;
