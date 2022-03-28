import hljs from 'highlight.js';
import { marked } from 'marked';
import 'highlight.js/styles/github-dark-dimmed.css';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { VFC } from 'react';

import { getBlogData } from '@/api/getBlogData';
import Layout from '@/components/Layout';
import { BlogType, TitleBlogType } from '@/types/BlogType';

type ContentsPageProps = {
  results: BlogType;
};

const Contents: VFC<ContentsPageProps> = ({ results }) => {
  marked.setOptions({
    langPrefix: 'rounded-xl my-2 text-sm hljs language-',
    highlight: (code, lang) => {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });
  return (
    <Layout>
      <div className="mx-auto w-3/5">
        <p>{results.updated_at}</p>
        <h1 className="text-center">{results.title}</h1>
        <br />
        {results.contents ? (
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html: marked(results.contents),
            }}
          ></div>
        ) : (
          <></>
        )}
        <br />
        <br />
      </div>
    </Layout>
  );
};

type getStaticPropsType = {
  results: TitleBlogType[];
};
type getStaticParamsType = {
  title: string;
};

export const getStaticPaths: GetStaticPaths<getStaticParamsType> = async () => {
  const requestUrl = `http://onikunblog.herokuapp.com/blog/`;
  const response = await getBlogData(requestUrl);
  const paths = response.map((post) => ({
    params: { title: post.title },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<getStaticPropsType, getStaticParamsType> = async ({
  params,
}) => {
  let requestUrl: string;
  if (params === undefined) {
    requestUrl = `http://onikunblog.herokuapp.com/blog/jstest`;
  } else {
    const title = params.title;
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
