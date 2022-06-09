import { GetServerSideProps, NextPage } from 'next';
import Router from 'next/router';
import React, { useCallback } from 'react';

import { getBlogData } from '@/api/getBlogData';
import { PaginationButton } from '@/components/blog/PaginationButton';
import Title from '@/components/blog/Title';
import { BlogAllType } from '@/types/BlogType';

type ContentsPageProps = {
  all: BlogAllType;
};

const Blog: NextPage<ContentsPageProps> = ({ all }) => {
  const handlePage = useCallback((url: string) => {
    const urlParam = new URLSearchParams(url.split('?')[1]);
    const pageNum = Number(urlParam.get('offset'));
    // eslint-disable-next-line
    Router.push(`/blog/?page=${pageNum}`);
  }, []);
  return (
    <>
      <Title results={Array.prototype.reverse.call(all.results)} />
      <div className="text-center">
        <PaginationButton
          buttonClick={() => (all.previous ? handlePage(all.previous) : undefined)}
          buttonName={'戻る'}
        />
        <PaginationButton
          buttonClick={() => (all.next ? handlePage(all.next) : undefined)}
          buttonName={'次へ'}
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageNumber = Number(context.query.page);
  let requestUrl;
  if (isNaN(pageNumber)) {
    requestUrl = `http://onikunblog.herokuapp.com/blog?limit=6`;
  } else {
    requestUrl = `http://onikunblog.herokuapp.com/blog?limit=6&offset=${pageNumber}`;
  }
  if (requestUrl) {
    const response = await getBlogData(requestUrl);
    return {
      props: { all: response },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Blog;
