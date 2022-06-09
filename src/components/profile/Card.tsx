import Image from 'next/image';
import React, { VFC } from 'react';

type cardPropsType = {
  size1?: string;
  profContents: { id: string; content: string }[];
};
// eslint-disable-next-line react/display-name
const Card: VFC<cardPropsType> = React.memo(({ profContents }) => {
  console.log('Card is rendered');
  return (
    <div>
      <div className="p-2 my-4">
        <div className="flex justify-end">
          <div className="mx-16 mt-16">
            <Image
              className=" w-2/4 rounded-full "
              src="/onikun1.png"
              width={200}
              height={200}
              decoding="async"
              alt="my-icon"
            />
          </div>
          <div className="m-2 w-2/3">
            <div className="p-4 "></div>
            <div className="p-4 text-sm border-y-2 border-white">
              {profContents.map((prof) => (
                <p className="m-4" key={prof.id}>
                  {prof.content}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
