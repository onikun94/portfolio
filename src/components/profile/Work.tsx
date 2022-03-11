import Image from 'next/image';
import React, { VFC } from 'react';

type WorkPageProps = {
  title: string;
  img: string;
  contents: string;
  link: string;
  tech: string;
};

const Work: VFC<WorkPageProps> = (props) => {
  return (
    <div className="p-2 m-4 w-2/5 text-center hover:bg-gray-200 rounded-xl border-2">
      <a className="text-lg " href={props.link}>
        <div className="m-2 text-base">{props.title}</div>
        <div className="text-center">
          <Image
            className="w-2/4 rounded-xl"
            src={props.img}
            width={100}
            height={100}
            alt="my-work-image"
          />
        </div>
        <p className="my-2 text-sm">{props.contents}</p>
        <p className="my-2 text-xs text-gray-400">{props.tech}</p>
      </a>
    </div>
  );
};

export default Work;
