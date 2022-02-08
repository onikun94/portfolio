import Link from 'next/link';
import React, { VFC } from 'react';

import { TitleBlogType } from '@/types/BlogType';

type ContentsPageProps = {
  results: TitleBlogType[];
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
