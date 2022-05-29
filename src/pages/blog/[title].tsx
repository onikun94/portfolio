import 'highlight.js/styles/github-dark-dimmed.css';
import hljs from 'highlight.js';
import { marked } from 'marked';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { VFC } from 'react';

import { getBlogData, getOnlyBlogData } from '@/api/getBlogData';
import { Chapter } from '@/components/blog/Chapter';
import Layout from '@/components/Layout';
import { BlogType } from '@/types/BlogType';

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
        <div>{results.updated_at}</div>
        {results.image !== '' ? (
          <Chapter
            chapImg={`/blogImg/${results.image.substring(7, results.image.length - 4)}.svg`}
            chapTitle={results.title}
          />
        ) : (
          <Chapter chapImg={`/blogImg/arrow.svg`} chapTitle={results.title} />
        )}
        {results.contents ? (
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html: marked(results.contents),
            }}
          ></div>
        ) : (
          <div></div>
        )}
      </div>
    </Layout>
  );
};

type getStaticPropsType = {
  results: BlogType | boolean;
};
type getStaticParamsType = {
  title: string;
};

export const getStaticPaths: GetStaticPaths<getStaticParamsType> = async () => {
  const requestUrl = `http://onikunblog.herokuapp.com/blog/`;
  const response = await getBlogData(requestUrl);
  const res = response.results;
  const paths = res.map((post) => ({
    params: { title: post.title },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<getStaticPropsType, getStaticParamsType> = async ({
  params,
}) => {
  let requestUrl: string;
  if (params === undefined) {
    requestUrl = `http://onikunblog.herokuapp.com/blog/hoge`;
  } else {
    const title = params.title;
    requestUrl = `http://onikunblog.herokuapp.com/blog/${title}`;
  }

  if (requestUrl) {
    const response = await getOnlyBlogData(requestUrl);
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
