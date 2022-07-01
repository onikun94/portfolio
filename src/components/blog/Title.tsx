import Image from 'next/image';
import Link from 'next/link';
import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';

import { responsiveState } from '@/atoms/responsive';
import { SupaDataList } from '@/types/BlogType';

type SupaContentsPageProps = {
  results: SupaDataList[];
};

// eslint-disable-next-line react/display-name
const Title: VFC<SupaContentsPageProps> = React.memo(({ results }) => {
  const width = useRecoilValue(responsiveState);
  return (
    <div>
      {width >= 630 ? (
        <div className="mx-auto w-3/5 ">
          <div className="flex flex-wrap justify-center">
            {results.map((data) => (
              <Link key={data.id} href={`/blog/${data.id}`}>
                <a className="p-2 m-4 w-2/5 text-center bg-white hover:bg-orange-300 rounded-xl shadow cursor-pointer">
                  <div>{data.created_at}</div>
                  <Image
                    src={`/blogImg/${data.img_name!}.svg`}
                    width={80}
                    height={80}
                    alt={'arrow'}
                  />
                  <p className="my-4">{data.title}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {results.map((data) => (
            <Link key={data.id} href={`/blog/${data.id}`}>
              <a className="p-2 m-4 w-2/5 text-center bg-white hover:bg-orange-300 rounded-xl shadow cursor-pointer">
                <div>{data.created_at}</div>
                <Image src={`/blogImg/arrow.svg`} width={80} height={80} alt={'arrow'} />
                <p className="my-4">{data.title}</p>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
});

export default Title;
