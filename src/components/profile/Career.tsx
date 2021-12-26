import React, { VFC } from 'react';

type CareerPageProps = {
  date: string;
  contents: string;
};

const Career: VFC<CareerPageProps> = (props) => {
  return (
    <div className="m-2 p-2 border-b-2 border-opacity-50  border-gray-200">
      <p className=" text-gray-600 text-sm my-1">{props.date}</p>
      <p className=" text-xl font-bold">{props.contents}</p>
    </div>
  );
};

export default Career;
