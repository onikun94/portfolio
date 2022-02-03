import { getBlogData } from '@/api/getBlogData';
import { BlogType, TitleBlogType } from '@/types/BlogType';
import { GetServerSideProps } from 'next';
import { marked } from 'marked';
import React, { VFC } from 'react';
import Router from 'next/router';
import Link from 'next/link';

type ContentsPageProps = {
  results: TitleBlogType[];
};

const handleId = (searchId: number) => {
  Router.push(`/blog?q=${encodeURIComponent(searchId)}`);
};

const Title: VFC<ContentsPageProps> = ({ results }) => {
  return (
    <div className="mx-4">
      {results.map((data) => (
        <div key={data.id}>
          <p>{data.updated_at}</p>
          <Link href={`blog/${data.title}`}>
            <h1 className="cursor-pointer">{data.title}</h1>
          </Link>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Title;
