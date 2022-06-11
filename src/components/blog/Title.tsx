import Image from 'next/image';
import Link from 'next/link';
import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';

import { responsiveState } from '@/atoms/responsive';
import { TitleBlogType } from '@/types/BlogType';

type ContentsPageProps = {
  results: TitleBlogType[];
};
// eslint-disable-next-line react/display-name
const Title: VFC<ContentsPageProps> = React.memo(({ results }) => {
  const width = useRecoilValue(responsiveState);
  return (
    <>
      {width >= 630 ? (
        <div className="mx-auto w-3/5 ">
          <div className="flex flex-wrap justify-center">
            {results.map((data) => (
              <Link key={data.id} href={`/blog/${encodeURIComponent(data.title)}`}>
                <a className="p-2 m-4 w-2/5 text-center bg-white hover:bg-orange-300 rounded-xl shadow cursor-pointer">
                  <div>{data.updated_at}</div>
                  {data.image !== null ? (
                    <Image
                      src={`/blogImg/${data.image.substring(45, data.image.length - 4)}.svg`}
                      width={80}
                      height={80}
                      alt={data.image.substring(45, data.image.length - 4)}
                    />
                  ) : (
                    <Image src={`/blogImg/arrow.svg`} width={80} height={80} alt={'arrow'} />
                  )}

                  <p className="my-4">{data.title}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center">
            {results.map((data) => (
              <Link key={data.id} href={`/blog/${encodeURIComponent(data.title)}`}>
                <a className="p-2 m-4 w-2/5 text-center bg-white hover:bg-orange-300 rounded-xl shadow cursor-pointer">
                  <div>{data.updated_at}</div>
                  {data.image !== null ? (
                    <Image
                      src={`/blogImg/${data.image.substring(45, data.image.length - 4)}.svg`}
                      width={80}
                      height={80}
                      alt={data.image.substring(45, data.image.length - 4)}
                    />
                  ) : (
                    <Image src={`/blogImg/arrow.svg`} width={80} height={80} alt={'arrow'} />
                  )}

                  <p className="my-4">{data.title}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
});

export default Title;
