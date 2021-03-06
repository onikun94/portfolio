import Image from 'next/image';
import React from 'react';

type ChapterPropsType = {
  chapImg: string;
  chapTitle: string | undefined;
};

export const Chapter: React.VFC<ChapterPropsType> = ({ chapImg, chapTitle }) => {
  return (
    <div className="mb-8 text-center">
      <Image src={chapImg} width={128} height={128} alt={chapImg} />
      <h1 className="text-center">{chapTitle}</h1>
    </div>
  );
};
