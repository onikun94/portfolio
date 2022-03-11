import React, { VFC } from 'react';

type CareerPageProps = {
  date: string;
  contents: string;
};

const Career: VFC<CareerPageProps> = (props) => {
  return (
    <div className="pb-1 mx-8 ">
      <p className="my-1 text-sm text-gray-600">{props.date}</p>
      <p className="font-sanjp text-sm">{props.contents}</p>
    </div>
  );
};

export default Career;
