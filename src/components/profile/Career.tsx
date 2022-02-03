import React, { VFC } from 'react';

type CareerPageProps = {
  date: string;
  contents: string;
};

const Career: VFC<CareerPageProps> = (props) => {
  return (
    <div className="p-2 m-4 mx-8 border-b-2 border-opacity-50 border-gray-200">
      <p className="my-1 text-sm text-gray-600">{props.date}</p>
      <p className=" text-xl ">{props.contents}</p>
    </div>
  );
};

export default Career;
