import { TitleBlogType } from '@/types/BlogType';
import Image from 'next/image';
import Link from 'next/link';
import React, { VFC } from 'react';

type ContentsPageProps = {
  results: TitleBlogType[];
};

const Title: VFC<ContentsPageProps> = ({ results }) => {
  return (
    <div className="mx-auto w-3/5 ">
      <div className="flex flex-wrap justify-center">
        {results.map((data) => (
          <div
            className="p-2 m-4 w-2/5 text-center bg-white hover:bg-orange-300 rounded-xl shadow cursor-pointer"
            key={data.id}
          >
            <Link href={`blog/${data.title}`}>
              <div className="">
                <p>{data.updated_at}</p>
                <Image
                  src={`/blogImg/${data.image.substring(45, data.image.length - 4)}.svg`}
                  width={80}
                  height={80}
                />
                <p className="my-4">{data.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Title;
