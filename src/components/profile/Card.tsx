import Image from 'next/image';
import React, { VFC } from 'react';

type cardPropsType = {
  // content1: string;
  size1?: string;
  profContents: { id: string; content: string }[];
};
const Card: VFC<cardPropsType> = ({ profContents }) => {
  return (
    <p>
      <div className="p-2 my-4">
        <div className="flex justify-end">
          <div className=" mx-16 my-8">
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
            <div className="p-4 ">
              {/* <p className="p-1 text-base">{props.content1}</p>
              <p className="text-xs   ">{props.content2}</p> */}
            </div>
            <div className="p-4 text-sm border-y-2 border-white">
              {profContents.map((prof) => (
                <p key={prof.id}>{prof.content}</p>
              ))}
              {/* <p>{props.content3}</p>
              <p>{props.content4}</p>
              <p>{props.content5}</p> */}
            </div>
          </div>
        </div>
      </div>
    </p>
  );
};

export default Card;
