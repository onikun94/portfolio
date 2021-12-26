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
      <div className="m-2">
        <a className="text-lg font-bold" href={props.link}>
          {props.title}
        </a>
      </div>

      <Image className="m-auto w-2/4 rounded-xl" src={props.img} alt="my-work-image" />
      <p className="my-2">{props.contents}</p>
      <p className="my-2 text-gray-400">{props.tech}</p>
    </div>
  );
};

export default Work;
