import 'highlight.js/styles/github-dark-dimmed.css';
import hljs from 'highlight.js';
import { marked } from 'marked';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { VFC } from 'react';

import { Chapter } from '@/components/blog/Chapter';
import { getAllData, getDetailData } from '@/lib/getData';
import { SupaDataList } from '@/types/BlogType';
type ContentsPageProps = {
  results: SupaDataList;
};

const Contents: VFC<ContentsPageProps> = ({ results }) => {
  marked.setOptions({
    langPrefix: 'rounded-xl my-4 text-sm hljs language-',
    highlight: (code, lang) => {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });
  return (
    <div className="mx-auto w-4/5">
      <div>{results.created_at}</div>
      <Chapter chapImg={`/blogImg/arrow.svg`} chapTitle={results.title} />
      {results.contents ? (
        <div
          className="py-4 px-8 my-4 text-sm bg-white rounded-xl"
          dangerouslySetInnerHTML={{
            __html: marked(results.contents),
          }}
        ></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

type getStaticPropsType = {
  results: SupaDataList | null;
};
type getStaticParamsType = {
  title: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allData = await getAllData(0, 6);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const paths = allData.data!.map((data) => `/blog/${data.id}`);
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<getStaticPropsType, getStaticParamsType> = async ({
  params,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const detail = await getDetailData(params!.title);
  return {
    props: { results: detail },
  };
};

export default Contents;
