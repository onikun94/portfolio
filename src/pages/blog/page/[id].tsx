import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';

import Title from '@/components/blog/Title';
import { Pagination } from '@/components/Pagination';
import { getAllData } from '@/lib/getData';
import { SupaList } from '@/types/BlogType';

const PER_PAGE = 6;

type SupaType = {
  all: SupaList;
};

const Blog: NextPage<SupaType> = ({ all }) => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      <Title results={all.data!} />
      {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      <Pagination totalCount={all.count!} perpage={PER_PAGE} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allData = await getAllData(0, PER_PAGE);
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const paths = range(1, Math.ceil(allData.count! / PER_PAGE)).map(
    (repo) => `/blog/page/${String(repo)}`,
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id = Number(params!.id);
  const start = (id - 1) * PER_PAGE;
  const end = id * PER_PAGE - 1;
  const data = await getAllData(start, end);
  return {
    props: { all: data },
  };
};

export default Blog;
