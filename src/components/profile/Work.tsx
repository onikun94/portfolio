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
    <div className="border-2 rounded-xl  m-4 p-2 text-center w-2/5 hover:bg-gray-200">
      <div className="m-2">
        <a className=" font-bold text-lg   " href={props.link}>
          {props.title}
        </a>
      </div>

      <img className="m-auto w-2/4 rounded-xl" src={props.img} />
      <p className="my-2">{props.contents}</p>
      <p className="my-2 text-gray-400">{props.tech}</p>
    </div>
  );
};

export default Work;
